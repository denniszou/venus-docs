# 导入已存在的扇区数据
当我们希望将已经通过其他算力组件方案完成的扇区存储目录迁移到 `venus-cluster` 中时，只需要使用 `venus-sector-manager` 导入，并更新相应的配置文件即可。

## 导入及校验
**注意**:导入和校验都需要在未启动 `venus-sector-manager daemon` 的情况下进行。

### 导入
`venus-sector-manager` 提供了名为 `storage attach` 的导入工具，其使用方式如下：
```
venus-sector-manager util storage attach --verbose --name={storage name} <path>
```

其中：
- `name` 是一个选填参数;
- `<path>` 是存储路径，在导入过程中会被转换成绝对路径。

`name` 和 `<path>` 的含义可以参考 [Common.PersistStores](https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/04.venus-sector-manager%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md#commonpersiststores)。

举例来说，我们使用
```
venus-sector-manager util storage attach --verbose --name=a -v ./mock-tmp/remote
```

通常会产生类似下面的日志：
```
2022-03-11T16:03:52.492+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}
2022-03-11T16:03:52.493+0800    INFO    cmd     internal/util_storage.go:104    use match pattern "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/remote/sealed/*"     {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.493+0800    INFO    cmd     internal/util_storage.go:121    path "s-t010000-16" matched=true        {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.494+0800    INFO    cmd     internal/util_storage.go:121    path "s-t010000-17" matched=true        {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.494+0800    INFO    cmd     internal/util_storage.go:121    path "s-t010000-18" matched=true        {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.508+0800    INFO    cmd     internal/util_storage.go:148    sector indexer updated for s-t010000-16 {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.509+0800    INFO    cmd     internal/util_storage.go:148    sector indexer updated for s-t010000-17 {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.509+0800    INFO    cmd     internal/util_storage.go:148    sector indexer updated for s-t010000-18 {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.509+0800    INFO    cmd     internal/util_storage.go:152    3 sectors out of 3 files have been updated      {"name": "a", "strict": false, "read-only": false}
2022-03-11T16:03:52.509+0800    WARN    cmd     internal/util_storage.go:153    add the section below into the config file:     {"name": "a", "strict": false, "read-only": false}

[[Common.PersistStores]]
Name = "a"
Path = "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/remote"
Strict = false
ReadOnly = false
```

这时目录导入就已经完成了，所有扇区的位置信息也被记录了下来。
我们将最后输出的范例配置复制并填写到 `venus-sector-manager` 的配置文件中即可完成导入工作。

#### 重新导入
如果我们发现导入时填写的信息有误，例如 `--name` 出现了拼写错误，那么我们只需要重新使用正确的信息完成一次导入流程即可。
扇区的位置信息会被覆盖更新。

### 校验
`venus-sector-manager` 提供的 `storage find` 工具可以用来检查扇区导入的结果是否正确，其使用方式如下：
```
venus-sector-manager util storage find <miner actor id> <sector number>
```

继续以上面示范的导入工作为例，我们希望检验扇区 `s-t010000-17` 是否已被正确记录，可以使用：
```
venus-sector-manager util storage find 10000 17
```

通常会产生类似下面的日志：
```
2022-03-11T16:23:01.207+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}
2022-03-11T16:23:01.223+0800    INFO    cmd     internal/util_storage.go:218    found s-t010000-17 in "a"
2022-03-11T16:23:01.223+0800    INFO    cmd     internal/util_storage.go:222    store instance exists
```

这就表示我们的导入和配置工作都已经完成了。

#### 校验异常：扇区信息未记录成功
如果校验过程中出现类似
```
2022-03-11T16:45:59.120+0800    WARN    cmd     internal/util_storage.go:214    s-t010000-17 not found
```
这样的日志，说明指定的扇区未导入成功，我们需要重新检查导入过程。

#### 校验异常：存储配置未更新
如果校验过程中出现类似
```
2022-03-11T16:22:34.044+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}
2022-03-11T16:22:34.059+0800    INFO    cmd     internal/util_storage.go:218    found s-t010000-17 in "a"
2022-03-11T16:22:34.059+0800    WARN    cmd     internal/util_storage.go:227    store instance not found, check your config file
```
这样的日志，说明 `venus-sector-manager` 的配置文件没有更新成功，我们需要按之前所说的方法去更新配置。