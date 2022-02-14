(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{437:function(e,t,s){"use strict";s.r(t);var a=s(17),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-use-venus-local-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-venus-local-wallet"}},[e._v("#")]),e._v(" How to use venus local wallet")]),e._v(" "),s("p",[e._v("The wallet is used to manage and save the private key, which is stored in the local database after encryption.\nBefore using the wallet, you need to set the password of the wallet. A wallet has only one password, and all the private keys are encrypted with the same password.\nNo password will only affect the functions related to the wallet (such as signature). Other functions can be used normally.\nThe encrypted private key needs to be decrypted before use, so the unlock command is provided to realize this function. "),s("strong",[e._v("Every time the program is restarted and the wallet is used, the wallet must be unlocked")]),e._v(".")]),e._v(" "),s("p",[e._v("There are two types of wallet addresses, secp256k1 and BLS. The address of secp256k1 starts with f1 and the address of BLS starts with f3.\nIn the program, it is distinguished by the SigType field in the structure "),s("a",{attrs:{href:"https://github.com/filecoin-project/venus/blob/master/pkg/crypto/keyinfo.go#L22",target:"_blank",rel:"noopener noreferrer"}},[e._v("keyinfo"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Wallet provides functions such as creating private key, importing and exporting private key, unlocking and locking wallet, viewing and setting default wallet address.")]),e._v(" "),s("h2",{attrs:{id:"related-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-functions"}},[e._v("#")]),e._v(" Related functions")]),e._v(" "),s("ol",[s("li",[e._v("set password")])]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./venus wallet set-password "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nPassword "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" successfully\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("to create a wallet address, import or export a private key, you need to set the password in advance, otherwise it will fail")])]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To create a wallet address, the BLS address is created by default")]),e._v("\n./venus wallet new\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# import private key")]),e._v("\n./venus wallet "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("import")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# export private key")]),e._v("\n./venus wallet "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("unlock wallet")])]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./venus wallet unlock "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nunlocked success\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("locked wallet")])]),e._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("./venus wallet lock "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nlocked success\n")])])]),s("h2",{attrs:{id:"matters-needing-attention"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matters-needing-attention"}},[e._v("#")]),e._v(" Matters needing attention")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("The first time a program starts, you need to set a password for it")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Set the password before importing or creating the private key，Otherwise, the execution will fail")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("The wallet needs to be unlocked after the program is restarted, Otherwise, the signature will fail because the private key cannot be obtained,\nIf you fail to obtain the private key, you will also report an error")]),e._v(": <address> is locked.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);