(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{475:function(e,t,r){"use strict";r.r(t);var s=r(17),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"故障排除和常见问题解答"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障排除和常见问题解答"}},[e._v("#")]),e._v(" 故障排除和常见问题解答")]),e._v(" "),r("p",[r("em",[e._v("对于 "),r("code",[e._v("venus")]),e._v(" 有问题吗? 以下是一些常见错误（及其修复），以及常见问题的解答。")])]),e._v(" "),r("p",[r("em",[e._v("注意: 此Wiki专注于 "),r("code",[e._v("venus")]),e._v(" 。有关整个Filecoin项目的问题，请参阅"),r("a",{attrs:{href:"https://filecoin.io/faqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filecoin项目常见问题解答"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4%E5%92%8C%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94"}},[e._v("故障排除和常见问题解答")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E7%9B%AE%E5%BD%95"}},[e._v("目录")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"}},[e._v("已知问题")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E6%9B%B4%E6%94%B9%E7%AB%AF%E5%8F%A3"}},[e._v("更改端口")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85"}},[e._v("二进制安装")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E4%B8%8B%E8%BD%BD%E5%B9%B6%E6%9E%84%E5%BB%BA"}},[e._v("下载并构建")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E6%8C%96%E7%9F%BF%E5%92%8C%E4%BA%A4%E6%98%93"}},[e._v("挖矿和交易")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#daemon%E6%97%A0%E6%B3%95%E5%90%AF%E5%8A%A8"}},[e._v("Daemon无法启动")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E9%93%BE%E5%90%8C%E6%AD%A5%E4%B8%8D%E5%AE%8C%E5%85%A8%E5%AF%BC%E8%87%B4%E7%9A%84%E9%97%AE%E9%A2%98"}},[e._v("链同步不完全导致的问题")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E8%BF%9E%E6%8E%A5%E5%88%B0%E7%BD%91%E7%BB%9C%E7%9A%84%E9%97%AE%E9%A2%98"}},[e._v("连接到网络的问题")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#%E5%8D%87%E7%BA%A7"}},[e._v("升级")])])])])])])]),e._v(" "),r("h3",{attrs:{id:"已知问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#已知问题"}},[e._v("#")]),e._v(" 已知问题")]),e._v(" "),r("p",[e._v("已知问题已 "),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/issues?q=is%3Aissue+is%3Aopen+label%3AC-bug",target:"_blank",rel:"noopener noreferrer"}},[e._v("在此处分类"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"更改端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更改端口"}},[e._v("#")]),e._v(" 更改端口")]),e._v(" "),r("p",[e._v("venus默认使用静态端口 6000。如果要更改为其他端口以解决NAT或其它问题，请按以下方法操作。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("初始化节点后，导航至配置文件 "),r("code",[e._v("config.json")]),e._v(" 。默认情况下，它位于 "),r("code",[e._v("~/.venus/config.json")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("找到配置的swarm部分。替换 "),r("code",[e._v("6000")]),e._v(" 为您要使用的端口。")])])]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"swarm"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("                                                                                                                                           \n                "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"address"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/ip4/0.0.0.0/tcp/6000"')]),e._v("                                                                                                           \n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" \n")])])]),r("ol",[r("li",[e._v("重新启动程序。 "),r("code",[e._v("venus swarm id")]),e._v(" 应该显示给您使用新的swarm地址。")])]),e._v(" "),r("h3",{attrs:{id:"二进制安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装"}},[e._v("#")]),e._v(" 二进制安装")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v('错误: “venus is damaged and can’t be opened. You should move it to the Trash." (MacOS) '),r("br")]),e._v("\n这是由于Mac的默认保护设置。在Sierra之前的MacOS上，转到 "),r("code",[e._v("System Preferences > Security & Privacy > General")]),e._v("。选择 "),r("code",[e._v("Allow apps downloaded from: Anywhere")]),e._v(". (不允许单个应用程序的运行)")])]),e._v(" "),r("h3",{attrs:{id:"下载并构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载并构建"}},[e._v("#")]),e._v(" 下载并构建")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("cloning时出现错误: host无法建立真实性"),r("br")]),e._v("\n确定您的Github账号已 "),r("a",{attrs:{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("添加SSH密钥"),r("OutboundLink")],1),e._v("。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("错误: 开发路径无效 (/Library/Developer/CommandLineTools), 缺少 xcrun"),r("br")]),e._v("\n确保已安装 "),r("a",{attrs:{href:"https://developer.apple.com/xcode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("XCode"),r("OutboundLink")],1),e._v(" 。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("pulling时发生错误: 找不到SharedFrameworks或无法找到xcodebuild"),r("br")]),e._v("\n这是由于Xcode /命令行工具安装不同步造成的(参考 "),r("a",{attrs:{href:"https://github.com/golang/go/issues/26073",target:"_blank",rel:"noopener noreferrer"}},[e._v("golang/go/issues/26073"),r("OutboundLink")],1),e._v(")。您可以尝试更新Xcode（如果运行的是老版本），然后启动它以安装最新的命令行工具。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v('$GOPATH 或 $PATH 错误，例如 "panic: exec: gx-go executable file is not found in $PATH"'),r("br")]),e._v("\n确保已经正确运行deps的步骤。例如如果您在Mac上安装了go和rust，那么未为您明确设置GOPATH，二进制文件将安装在 "),r("code",[e._v("/usr/local/opt/go/libexec/bin")]),e._v(" 中, 检查您的路径并确保所有的存放路径都在其中，如果没有，请添加它们：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")]),e._v("}")]),e._v(":/usr/local/opt/go/libexec/bin:~/go/bin\n")])])]),r("p",[e._v("然后重试 "),r("code",[e._v("go run ./build/*.go deps")]),e._v(" ，再重试构建。")]),e._v(" "),r("p",[e._v("如果仍然卡住，或者看到带有 "),r("code",[e._v("$GOPATH")]),e._v(" 或 "),r("code",[e._v("$PATH")]),e._v(" 的错误消息, 则可能是Go工作区设置存在问题。本"),r("a",{attrs:{href:"https://www.ardanlabs.com/blog/2016/05/installing-go-and-your-workspace.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("教程"),r("OutboundLink")],1),e._v("可能有所帮助。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("错误: “venus”软件包至少需要go 1.11.1版。")]),e._v("\n...但是，您的gx-go二进制文件是使用go1.10.3编译的。请更新gx-go（或使用当前的go编译器重新编译）如果 "),r("code",[e._v("ipfs")]),e._v(" 是从自制软件安装的, 则路径中的 "),r("code",[e._v("gx")]),e._v(" 和 "),r("code",[e._v("gx-go")]),e._v(" 版本可能错误。与前述一样，检查您的 "),r("code",[e._v("$PATH")]),e._v(" 并确认所有存放路径是否存在，如果没有，请在自定义路径之前添加它们。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("运行build或deps时出现Rust错误"),r("br")]),e._v("\n如果遇到rust编译器错误，即 "),r("code",[e._v("cargo build --release --all --manifest-path proofs/rust-proofs/Cargo.toml' failed:")]),e._v(" 尝试将rust更新到最新版本 "),r("code",[e._v("rustup update")]),e._v(".")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("运行安装时出错"),r("br")]),e._v("\n如果在运行安装时遇到错误，即 "),r("code",[e._v("/System/Library/Frameworks//Security.framework/Security are out of sync. Falling back to library file for linking")]),e._v(" 这可能是由于安装了旧的。通过安装程序 "),r("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("installer"),r("OutboundLink")],1),e._v(" 重新安装Go，然后删除filecoin ("),r("code",[e._v("rm -rf ./venus")]),e._v(") 并重启.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("无法构建 OS X Mojave "),r("code",[e._v("fatal error: 'stdio.h' file not found")])]),e._v("\n例如，当您构建go-secp256k1时，如果从源代码构建所有内容并且未使用自制软件安装任何内容，则可能会看到此错误：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("go get -u github.com/ipsn/go-secp256k1\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#github.com/ipsen/go-secp256k1")]),e._v("\nIn "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" included from "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/ipsn/go-secp256k1/secp256.go:17\nIn "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" included from ././libsecp256k1/src/secp256k1.c:9:\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/ipsn/go-secp256k1/libsecp256k1/src/util.h:14:10: fatal error: "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'stdlib.h'")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" not found\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#include <stdlib.h>")]),e._v("\n         ^~~~~~~~~~\n")])])]),r("p",[e._v("OS X Mojave 将"),r("code",[e._v("stdlib.h")]),e._v(" 的位置移出了"),r("code",[e._v("/usr/include")]),e._v("。该问题在其他软件包中也存在，并且在此线程中针对 "),r("a",{attrs:{href:"https://github.com/neovim/neovim/issues/9050",target:"_blank",rel:"noopener noreferrer"}},[e._v("neovim issue #9050"),r("OutboundLink")],1),e._v(" 建议了几种解决方案。感谢Filecoin社区成员 "),r("em",[e._v("A_jinbin_filecoin.cn")]),e._v(" 的链接。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("安装依赖项时出错 "),r("code",[e._v("'go mod download' failed")])]),r("br"),e._v("\n如果您要从以前的版本更新venus，则可能还需要更新git子模块。尝试 "),r("code",[e._v("git submodule update --init --recursive")]),e._v(" 更新它们。")])])]),e._v(" "),r("h3",{attrs:{id:"挖矿和交易"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挖矿和交易"}},[e._v("#")]),e._v(" 挖矿和交易")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("矿工创建失败")])]),e._v(" "),r("ul",[r("li",[e._v("确保您的节点具有有效的钱包，并且钱包的余额为非零。")]),e._v(" "),r("li",[e._v("确保您的节点已连接到群集/网络。如果守护程序已重新启动，请运行 "),r("code",[e._v("swarm connect")]),e._v(".")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("交易终止（消息从未被挖掘）")])]),e._v(" "),r("ul",[r("li",[e._v("如果在同一台计算机上运行两个节点，并且看到类似的信息 "),r("code",[e._v("ERROR consensus.: Nonce too high: 5 0 <UnknownActor (0xc0137edda0); balance: 1000000; nonce: 0>")]),e._v("，则您可能至少尝试创建一个矿工一次。即使创建可能失败，此操作也会更新本地随机数。您的nonce过高，无法进行有效的挖矿。"),r("em",[e._v("除了重新初始化节点外，没有其他解决方法。")])]),e._v(" "),r("li",[e._v("如果仅运行单个节点，则此问题目前对您来说是看不到的（日志消息仅出现在其他节点上）。如果您怀疑这一点，请重新初始化您的节点。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("提议的处理失败：发送提议时出错：超过截止日期")])]),e._v(" "),r("ul",[r("li",[e._v("交易被直接提议给相关矿工（链下），因此您的节点需要直接与矿工建立连接，例如创建支付渠道。该矿工离线或您无法访问，请尝试另一个矿工。")]),e._v(" "),r("li",[e._v("最大分片（即文件）大小必须小于矿工扇区大小，当前为256 MiB。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("提议处理失败：创建支付时出错：超出了截止日期")])]),e._v(" "),r("ul",[r("li",[e._v("最好的推断是先前的消息未能被挖掘，但是增加了actor的nonce。跟踪 "),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/issues/1936",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1936"),r("OutboundLink")],1),e._v("，您可能需要重新初始化节点。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("为什么我的交易被搁置了 "),r("code",[e._v("Staged")]),e._v("?")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("我的文件分片太大了吗?")]),e._v("\n如果存储客户C建议与矿工M达成交易D，并且D引用了一块数据片段P，其大小小于或等于M的暂存扇区的大小，则P将从C转移到M，并且M将P写入其分段的扇区。D的状态将"),r("code",[e._v("Staged")]),e._v(" 在此时。")])]),e._v(" "),r("p",[e._v("如果状态不是 "),r("code",[e._v("Staged")]),e._v("，则在C提议处理M并传输字节之后，P就不是“等待被密封”。如果P的大小大于扇区的大小，则会发生这种情况。在devnet /用户集群中，所指的大小是"),r("code",[e._v("266338304")]),e._v(" 字节。")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("在什么情况下，交易的状态会从"),r("code",[e._v("Staged")]),e._v(" 到 "),r("code",[e._v("Posted")]),e._v(" ？")]),e._v("\n如果交易D的状态为 "),r("code",[e._v("Staged")]),e._v(", 则矿工已接受数据片P并将其写入暂存扇区S。如果M不使用自动密封，则P将存在S中，直到M收到新的交易D2提议，其数据片P2足够大，以至于大小（P） + 大小（P2） >= 可用空间（S）。发生这种情况时，M将开始密封S。完成密封后，D的状态将变为 "),r("code",[e._v("Posted")]),e._v("。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("为什么我的交易状态没有变为  "),r("code",[e._v("Posted")]),e._v("?")])]),e._v(" "),r("ul",[r("li",[e._v("在交易状态变为 "),r("code",[e._v("Posted")]),e._v(" 之前, 矿工必须接受该数据碎片并将其写入分段扇区（有关详细信息，请参见上面的问题）。一些矿工，包括由Filecoin项目运行的引导节点，被配置为在短时间内自动执行此操作（这称为自动密封）。但是，选定的矿工完全有可能（1）不使用自动密封，并且（2）在密封之前仍等待新的交易以充分填充扇区。在这种情况下，交易达成之前会有延迟 "),r("code",[e._v("Posted")]),e._v("。")])])])]),e._v(" "),r("h3",{attrs:{id:"daemon无法启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#daemon无法启动"}},[e._v("#")]),e._v(" Daemon无法启动")]),e._v(" "),r("ul",[r("li",[e._v("如果你看到了 "),r("code",[e._v('Error: failed to load config file: failed to read config file at "~/.venus/config.json": invalid checksum')]),e._v(" 尝试启动Daemon时，请检查config.json中的defaultAddress和miner.address是否正确。")])]),e._v(" "),r("h3",{attrs:{id:"链同步不完全导致的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链同步不完全导致的问题"}},[e._v("#")]),e._v(" 链同步不完全导致的问题")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("我向Faucet获取资金，并且收到消息CID，但我的钱包里没有资金。")])]),e._v(" "),r("p",[e._v("这很可能是因为您的节点尚未完成整个区块链的同步。当您使用faucet接收资金时，Faucet从另一个节点发送节点资金。资金将作为消息发布，并将被上链到新的区块中。在您的节点可以确定您的钱包中有余额之前，必须将新区块同步到您的链中。message wait命令用于确保消息，1）挖掘到区块 2）您已将该区块同步到链中。由于您的faucet要求已放置在最新的块中，因此如果您的链中尚无该块，则FIL不会出现在您的钱包中。")]),e._v(" "),r("p",[e._v("目前，链同步可能会有点慢。下载所有块的过程非常快，但是当您的节点重播块中的所有消息以确保所有内容都有效时，速度就会变慢。目前，此过程需要相当长的时间。有关如何检查节点的同步进度，请参阅 "),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/wiki/Getting-Started#get-fil-from-the-filecoin-faucet",target:"_blank",rel:"noopener noreferrer"}},[e._v("从Filecoin Faucet获取FIL"),r("OutboundLink")],1),e._v(" 。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("消息长时间处于等待状态，Venus message似乎出问题了")])]),e._v(" "),r("p",[e._v("与上述类似，您可以在完成同步链之前将任何新消息发布到网络。链完成同步后，您才能看到消息。有关如何检查节点的同步进度，请参阅 "),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/wiki/Getting-Started#get-fil-from-the-filecoin-faucet",target:"_blank",rel:"noopener noreferrer"}},[e._v("从Filecoin Faucet获取FIL"),r("OutboundLink")],1),e._v(" 。")])])]),e._v(" "),r("h3",{attrs:{id:"连接到网络的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接到网络的问题"}},[e._v("#")]),e._v(" 连接到网络的问题")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("如何连接到网络？")])]),e._v(" "),r("p",[e._v("请参阅 "),r("code",[e._v("venus swarm --help")]),e._v("。为了连接到指定的网络，您必须具有正确的二进制文件（或源代码），并且需要使用该网络的正确的genesis.car文件初始化Filecoin存储库。")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("当我连接到user-devnet或test-devnet时，我收到很多错误")])]),e._v(" "),r("p",[e._v("看到错误例如")]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("code not at same version: GIT_SHA does not match DIFFERENT_GIT_SHA, disconnecting from peer:\n")])])]),r("p",[e._v("或在链同步期间在块验证期间看到很多错误，这意味着您的二进制或源代码的版本与您要加入的devnet的版本不正确。要加入devnet，请在存储库的 "),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Releases"),r("OutboundLink")],1),e._v(" 部分中下载该devnet的最新版本。")])])]),e._v(" "),r("h3",{attrs:{id:"升级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#升级"}},[e._v("#")]),e._v(" 升级")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("如何升级我的Venus版本？"),r("br")]),e._v("\n要进行升级 "),r("code",[e._v("venus")]),e._v("，您需要在 "),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),r("OutboundLink")],1),e._v(" 重新运行完整的下载和构建过程。将来，我们计划添加自动更新 ("),r("a",{attrs:{href:"https://github.com/filecoin-project/venus/issues/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8"),r("OutboundLink")],1),e._v(")。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);