(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{456:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何启动测试网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何启动测试网络"}},[s._v("#")]),s._v(" 如何启动测试网络")]),s._v(" "),a("blockquote",[a("p",[s._v("本文以在 Ubuntu 系统部署2k网络为例")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("目前在 CentOS 系统存在问题, 具体请参考："),a("a",{attrs:{href:"https://github.com/filecoin-project/lotus/issues/7136",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"服务组件搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务组件搭建"}},[s._v("#")]),s._v(" 服务组件搭建")]),s._v(" "),a("p",[s._v("   组件下载及编译请参考文档：https://venus.filecoin.io/guide/How-To-Deploy-MingPool.html#pre-requisites")]),s._v(" "),a("h3",{attrs:{id:"venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[s._v("#")]),s._v(" venus-auth")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-auth run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" auth.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# token列表")]),s._v("\n$ ./venus-auth token list\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user列表")]),s._v("\n$ ./venus-auth user list\n")])])]),a("h3",{attrs:{id:"venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[s._v("#")]),s._v(" venus-gateway")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-gateway --listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/0.0.0.0/tcp/45132 run --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" gateway.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wallet列表")]),s._v("\n$ ./venus-gateway  wallet list\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# miner列表")]),s._v("\n$ ./venus-gateway  miner list\n")])])]),a("p",[s._v("日志")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('2021-09-27T11:05:26.736+0800    INFO    main    venus-gateway/main.go:95        venus-gateway current version 1.1.1\'+git770f19a\', listen /ip4/0.0.0.0/tcp/45032\n2021-09-27T11:05:26.736+0800    INFO    event_stream    walletevent/wallet_event.go:51          {"rand secret": "IkR/US2MFJr1g53mucqPep0GQZ8DzC780QDJIm48yV8="}\n2021-09-27T11:05:26.736+0800    INFO    main    venus-gateway/main.go:104       Setting up control endpoint at /ip4/0.0.0.0/tcp/45032\n')])])]),a("h3",{attrs:{id:"venus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[s._v("#")]),s._v(" venus")]),s._v(" "),a("ul",[a("li",[s._v("生成预密封文件和数据")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus seed pre-seal --sector-size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --num-sectors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n$ ./venus seed genesis new localnet.json\n$ ./venus seed genesis add-miner localnet.json ~/.genesis-sectors/pre-seal-t01000.json\n")])])]),a("blockquote",[a("p",[a("code",[s._v("seed pre-seal")]),s._v(" 需要root权限,请在root用户下执行")])]),s._v(" "),a("ul",[a("li",[s._v("启动venus")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus daemon --make-genesis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devgen.car --genesis-template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localnet.json --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" venus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("venus作为公共服务组件需要监听不同IP时需要修改配置文件 "),a("code",[s._v(".venus/config.json")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apiAddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/0.0.0.0/tcp/3453"')]),s._v(",\n")])])]),a("p",[s._v("此时全网只有创世区块")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ ./venus chain head\n{\n        "Height": 0,\n        "ParentWeight": "0",\n        "Cids": [\n                {\n                        "/": "bafy2bzacedq52xonfsuaf6o66tkpaavkjwg43cs63weekhzz76wps4ih22lww"\n                }\n        ],\n        "Timestamp": "2021-09-27 11:10:53"\n}\n')])])]),a("h3",{attrs:{id:"venus-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-message"}},[s._v("#")]),s._v(" venus-message")]),s._v(" "),a("p",[s._v("   venus-auth管理着其他venus模块使用的jwt令牌，以便它们在网络上安全地相互通信.为共享模块生成token。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --perm specifies admin, sign, wirte or read permission of the token generated")]),s._v("\n$ ./venus-auth token gen --perm admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("SHARED是token名，共享组件可以随便起。")])]),s._v(" "),a("ul",[a("li",[s._v("为矿工t01000和wallet生成token")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-auth user "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test --miner"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000\n$ ./venus-auth token gen --perm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_WRITE_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("查询token及user")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-auth user list\nnumber: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nname: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nminer: f01000\nsourceType: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   // miner:1\nstate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         // "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": disable, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\ncomment: \ncreateTime: Thu, 05 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" 09:36:00 CST\nupdateTime: Thu, 05 Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" 09:36:00 CST\n\n$ ./venus-auth token list\nnum     name            perm            createTime              token\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       share-test      admin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05 09:27:56     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2hhcmUtdGVzdCIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.q3Euz4CwlqlLCTUciT4gkee6au_zhhyUAkyTXlkG51E\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05 09:36:44     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsInBlcm0iOiJ3cml0ZSIsImV4dCI6IiJ9.X8L5SWVzoRpr5X5hEOAh17n22zOgfkla7POva0zCihY\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-messager run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--db-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sqlite "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" msg.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("db-type还支持mysql，配置如下：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("--db-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql --mysql-dsn "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_messager?parseTime=true&loc=Local&readTimeout=10s&writeTimeout=10s"')]),s._v("\n")])])]),a("p",[s._v("2k网络4s出一个块，故需修改配置文件的WaitingChainHeadStableDuration为2s。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 默认是8s\n[messageService]\n  WaitingChainHeadStableDuration = "2s"\n')])])]),a("h3",{attrs:{id:"venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[s._v("#")]),s._v(" venus-miner")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# init miner repo")]),s._v("\n./venus-miner init --nettype"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k --auth-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1:8989 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --gateway-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/3453 --token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n --slash-filter "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])])]),a("p",[s._v("   此时没有启动venus-sealer,所以无法出块,因为获得出块权后需要计算证明，这个是venus-sealer负责的(管理所有的扇区永久存储),故暂时不启动venus-miner。")]),s._v(" "),a("h2",{attrs:{id:"创世节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创世节点"}},[s._v("#")]),s._v(" 创世节点")]),s._v(" "),a("h3",{attrs:{id:"venus-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet"}},[s._v("#")]),s._v(" venus-wallet")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-wallet run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" wallet.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\n$ ./venus-wallet setpwd\nPassword:******\nEnter Password again:******\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入钱包")]),s._v("\n$ ./venus-wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" ~/.genesis-sectors/pre-seal-t01000.key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询")]),s._v("\n$ ./venus-wallet list\nt3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia\n")])])]),a("p",[s._v("设置接入venus-gateway，提供签名服务,这一步很重要,否则出块,消息等都没法签名,业务无法正常运行.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改`~/.venus_wallet/config.toml`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("APIRegisterHub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nRegisterAPI "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/127.0.0.1/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<USER_WRITE_AUTH_TOKEN>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 矿工集群的别名，在venus-auth中注册")]),s._v("\nSupportAccounts "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("em",[a("strong",[s._v("保存后重启venus-wallet,需要unlock")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-wallet unlock\n")])])]),a("p",[s._v("查看是否成功,在venus-gateway的日志中查询:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05T10:01:07.665+0800    INFO    event_stream    walletevent/wallet_conn_mgr.go:89       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" wallet connection   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"channel"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"58309445-87da-4160-831a-44e5236ab3c7"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"walletName"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"support"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"signBytes"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6VzoKBejPzmFp/DvJzSO16s5SziYZKYjU2l2EkDUKy0="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-08-05T10:01:07.666+0800    INFO    event_stream    walletevent/wallet_event.go:79  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" new connections "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("58309445")]),s._v("-87da-4160-831a-44e5236ab3c7\n")])])]),a("p",[s._v("或用命令查询")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-gateway wallet list\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SupportAccounts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ConnectStates"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addrs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia"')]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChannelId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"58309445-87da-4160-831a-44e5236ab3c7"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ip"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:45138"')]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RequestCount"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateTime"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-08-05T10:01:06.261321253+08:00"')]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("上面日志即表示wallet注册服务组件成功,可提供签名服务.")])]),s._v(" "),a("h3",{attrs:{id:"venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sealer"}},[s._v("#")]),s._v(" venus-sealer")]),s._v(" "),a("ul",[a("li",[s._v("初始化")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./venus-sealer --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k init --genesis-miner --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000 --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" --pre-sealed-sectors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors --pre-sealed-metadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/.genesis-sectors/pre-seal-t01000.json --nosync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--messager-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/39812 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_WRITE_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n--no-local-storage\n")])])]),a("ul",[a("li",[s._v("启动")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMPDIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SPECIFIC_PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-sealer --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k run --nosync "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sealer.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n$ ./venus-sealer info\nChain: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sync behind"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("15h45m53s behind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("basefee "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" pFIL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nSealer: t01000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" KiB sectors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPower: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" Ki / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" Ki "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0000")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        Raw: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0000")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        Committed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB\n        Proving: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" KiB\nProjected average block win rate: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20024.16")]),s._v("/week "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("every 30s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProjected block win with "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.9")]),s._v("% probability every 41s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("projections DO NOT account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" future network and miner growth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nSealer Balance:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.242")]),s._v(" μFIL\n      PreCommit:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      Pledge:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.192")]),s._v(" μFIL\n      Vesting:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n      Available:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.05")]),s._v(" μFIL\nMarket Balance:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n       Locked:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n       Available: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nWorker Balance:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000000")]),s._v(" FIL\nTotal Spendable:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000000")]),s._v(" FIL\n\nSectors:\n        Total: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        Proving: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("p",[s._v("查看是不是在服务组件注册成功,gateway日志:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-09-27T14:06:13.135+0800    INFO    proof_stream    proofevent/proof_event.go:71    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" new connections 6295d403-275b-430e-a008-1b7491522d86 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" miner t01000\n")])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus-gateway miner list\nt01000\n")])])]),a("ul",[a("li",[s._v("开始出块\n   这个时候我们就可以启动venus-miner了")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# run \nnohup ./venus-miner run --nettype=2k --nosync > miner.log 2>& 1 &\n")])])]),a("p",[s._v("启动时会从venus-auth请求当前已加入venus分布式矿池中的miner列表,可以根据命令查询:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ ./venus-miner address state\n[\n        {\n                "Addr": "f01000",\n                "IsMining": true,\n                "Err": nil,\n        }\n]\n')])])]),a("p",[s._v("在venus-miner的运行过程中可以暂停或继续某个miner_id的出块:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./venus-miner address stop/start f01000\n")])])]),a("p",[s._v("查看venus-miner日志")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('2021-08-05T12:04:28.562+0800    INFO    miner   miner/minerwpp.go:88    GenerateWinningPoSt took 3.202841ms\n2021-08-05T12:04:28.562+0800    INFO    miner   miner/warmup.go:94      winning PoSt warmup successful  {"took": 0.00494326}\n2021-08-05T12:04:28.695+0800    INFO    miner   miner/multiminer.go:592 attempting to mine a block      {"tipset": ["bafy2bzacebmqknjl3nzdqsfalfe57u6nzzg5c5uphf3ctm4p2gvdgg33lhels"], "miner": "t01000"}\n2021-08-05T12:04:28.699+0800    INFO    miner   miner/multiminer.go:628 Time delta between now and our mining base: 61560s (nulls: 0), miner: t01000\n2021-08-05T12:04:28.705+0800    INFO    miner   miner/minerwpp.go:72    Computing WinningPoSt ;[{SealProof:5 SectorNumber:0 SealedCID:bagboea4b5abcbicxvd7mvaigrtsinxy33tjgg6yu24brzazyfwrtoe4ca7efhkav}]; [46 110 203 67 43 156 84 228 212 143 45 167 11 151 84 34 99 202 39 85 145 136 126 180 78 134 159 125 210 112 219 223]\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/minerwpp.go:88    GenerateWinningPoSt took 1.802124ms\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:704 mined new block ( -> Proof)     {"took": 0.012012063, "miner": "t01000"}\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:385 mining compute end      {"number of wins": 1, "total miner": 1}\n2021-08-05T12:04:28.707+0800    INFO    miner   miner/multiminer.go:394 select message  {"tickets": 1}\n2021-08-05T12:04:28.715+0800    INFO    miner   miner/multiminer.go:420 mined new block {"cid": "bafy2bzacedyy2xr3bvsyfd42qzpeiprojza2yyt7wdggeawj2cmtisfjnn4lo", "height": "1", "miner": "t01000", "parents": ["t00"], "took": 0.020098632}\n')])])]),a("p",[s._v("至此公共组件和创世节点搭建已经完成。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus chain ls\n2: (2021-08-05 14:09:55) [ bafy2bzacect5pja2prfkugczbdv2jfpbou4qr3edxxr6g7oo5bny6qklzgama: t01000, ]\n3: (2021-08-05 14:09:59) [ bafy2bzacedsl7eyaaiu7oifsdy6zpj2zotbcsnuml45hu5n4erdhygiyeua6s: t01000, ]\n4: (2021-08-05 14:10:03) [ bafy2bzacea42xioz3ki33uw7bbjkc5ydt4qs2j55ku2aqy2box4wjcgmzxtny: t01000, ]\n5: (2021-08-05 14:10:07) [ bafy2bzacecbmetsiwgms7sbukkkgzstpie5wsdwqsw5hwjqt6eqkuaq23wugs: t01000, ]\n6: (2021-08-05 14:10:11) [ bafy2bzacea3ojun5fx2rpplsnevvedhgxgpvwy7afmubcvhf463hdhlfpw4ye: t01000, ]\n7: (2021-08-05 14:10:15) [ bafy2bzaced4jqw2p5cejdtlfi7cq4o2treiynkp2lnhfpyss352qlbcdtknti: t01000, ]\n8: (2021-08-05 14:10:19) [ bafy2bzacecpmmlobk6qrzoclzu2duy6t4irvnqryyq4libvrlh4ekz3lmihhm: t01000, ]\n9: (2021-08-05 14:10:23) [ bafy2bzaceadvy5inclxdbtd2hsd72mijarkzz3rwpzznisf2yhlghushlooeg: t01000, ]\n10: (2021-08-05 14:10:27) [ bafy2bzacea3rn3zuiqgp5kxbam3fc3dqnoccktpsfwaukko3amxerpjud2zns: t01000, ]\n11: (2021-08-05 14:10:31) [ bafy2bzaceay2tzyd45k3e7tisbbp47gkjsrqs23jgl64wkj6jqryk4grrr7ss: t01000, ]\n")])])]),a("h2",{attrs:{id:"普通节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通节点"}},[s._v("#")]),s._v(" 普通节点")]),s._v(" "),a("p",[s._v("   普通节点和其他网络接入共享组件流程一致,可参考文档: https://venus.filecoin.io/guide/Using-venus-Shared-Modules.html#pre-requisites")]),s._v(" "),a("p",[s._v("   唯一需要说明的是给普通节点钱包转账的问题:因为venus服务组件是限制Send消息的,而2k私网的原始fil在创世钱包里,故需要一个转账节点.")]),s._v(" "),a("ul",[a("li",[s._v("启动一个venus节点,仅用于转账")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus daemon --genesisfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("devgen.car --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" venus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("ul",[a("li",[s._v("导入创世钱包")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 在venus-wallet导出钱包密钥\n$ ./venus-wallet export t3sjhgun7xcklmyga6x3c5sq6pbncdlmrjmepfz7ms4fuqimtk4fida37dhq7kpq3tn7nyu5hpnn7mtp3a7lia\nPassword:*\n7b2254797065223a22626c73222c22507269766174654b6579223a224541326e6a463363326b4f467977323079564f574b66733371794d6451767a35334c667459497347456b673d227d\n\n# 设置密码\n$ ./venus wallet set-password\nPassword:*\nEnter Password again:*\nPassword set successfully \nYou must REMEMBER your password! Without the password, it's impossible to decrypt the key!\n\n# 导入钱包\n$ ./venus wallet import\nipfs: Reading from /dev/stdin; send Ctrl-d to stop.\n\n")])])]),a("ul",[a("li",[s._v("转账")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" ./venus send "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])])]),a("p",[s._v("-- 常用命令")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 查询钱包列表\n$ ./venus wallet list\n\n# 查询指定钱包余额\n$ ./venus wallet balance <wallet>\n\n# 设置和查询默认钱包,转账的from即是默认钱包\n$ ./venus wallet default\n$ ./venus wallet set-default <wallet>\n")])])]),a("blockquote",[a("p",[s._v("venus转账节点重启后也需要unlock,不然无法转账.")])]),s._v(" "),a("h2",{attrs:{id:"扇区封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扇区封装"}},[s._v("#")]),s._v(" 扇区封装")]),s._v(" "),a("p",[s._v("   和主网逻辑差不多，请查阅："),a("a",{attrs:{href:"https://venus.filecoin.io/zh/guide/Using-venus-Shared-Modules.html#%E5%BC%80%E5%A7%8B%E5%B0%81%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[s._v("扇区封装"),a("OutboundLink")],1),s._v("，需要注意的是：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("文档中init时没有添加storage，故如果要做扇区封装，先attach storage；")])]),s._v(" "),a("li",[a("p",[s._v("如果机器上同时运行看了别的占用gpu的程序，如多个venus-worker，需要用TMP_DIR指定不同路径，避免竞争锁。")])]),s._v(" "),a("li",[a("p",[s._v("第一个sector时没有生成/var/tmp/s-basic-unsealed-2048，需要手动执行拷贝命令：")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cp <unsealed file> /var/tmp/s-basic-unsealed-2048\n")])])]),a("p",[s._v("   测试结果: 2~8 是新做的Sector，已上链")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./venus-sealer sectors list\nID  State    OnChain  Active  Expiration                   Deals  DealWeight  \n0   Proving  YES      YES     1550097 (in 10 weeks 1 day)  CC                 \n1   Proving  YES      YES     1550097 (in 10 weeks 1 day)  1      0B          \n2   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC                 \n3   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC                 \n4   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC                 \n5   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC                 \n6   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC                 \n7   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC                 \n8   Proving  YES      NO      1550097 (in 10 weeks 1 day)  CC  \n\n$ ./venus-sealer info\nChain: [sync behind! (22s behind)] [basefee 100 aFIL]\nSealer: f01000 (2 KiB sectors)\nPower: 40 Ki / 40 Ki (100.0000%)\n        Raw: 4 KiB / 4 KiB (100.0000%)\n        Committed: 18 KiB\n        Proving: 4 KiB\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);