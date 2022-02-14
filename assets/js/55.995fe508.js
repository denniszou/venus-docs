(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{428:function(e,t,r){"use strict";r.r(t);var a=r(17),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("p",[e._v("The hardware requirements for Filecoin mining are tied to the computational resources needed to "),r("em",[e._v("seal")]),e._v(" a sector and generating regular "),r("em",[e._v("Proof of Spacetime")]),e._v(" for every sealed sector ("),r("em",[e._v("WindowPoSt")]),e._v(").")]),e._v(" "),r("p",[e._v("These are computationally expensive operations which depend on the sector sizes used by the "),r("a",{attrs:{href:"https://network.filecoin.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filecoin network"),r("OutboundLink")],1),e._v(" on which the miner is running -calibration, testnet, mainnet etc.-. For reference, the requirements listed below correspond to "),r("strong",[e._v("32GiB sectors")]),e._v(", as used by mainnet and some testnets ("),r("em",[e._v("calibration")]),e._v(").")]),e._v(" "),r("p",[e._v("Different Filecoin Miner implementations may distribute sealing tasks differently, for example, using additional workers apart from the Miner. The following are "),r("em",[e._v("general")]),e._v(" requirements assuming all the mining operations are performed by the same machine. Resources needed by each operation are detailed later below. For a concrete example of hardware type and usage, see the "),r("RouterLink",{attrs:{to:"/mine/mining-architectures.html"}},[e._v("mining architectures")]),e._v(".")],1),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#general-hardware-requirements"}},[e._v("General hardware requirements")]),r("ul",[r("li",[r("a",{attrs:{href:"#cpu"}},[e._v("CPU")])]),r("li",[r("a",{attrs:{href:"#ram"}},[e._v("RAM")])]),r("li",[r("a",{attrs:{href:"#gpu"}},[e._v("GPU")])]),r("li",[r("a",{attrs:{href:"#disk"}},[e._v("Disk")])])])]),r("li",[r("a",{attrs:{href:"#specific-operation-requirements"}},[e._v("Specific operation requirements")])]),r("li",[r("a",{attrs:{href:"#about-hardware-requirements"}},[e._v("About hardware requirements")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"general-hardware-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#general-hardware-requirements"}},[e._v("#")]),e._v(" General hardware requirements")]),e._v(" "),r("h3",{attrs:{id:"cpu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[e._v("#")]),e._v(" CPU")]),e._v(" "),r("p",[e._v("A miner will need an "),r("strong",[e._v("8+ core CPU")]),e._v(".")]),e._v(" "),r("p",[e._v("We strongly recommend a CPU model with support for "),r("em",[e._v("Intel SHA Extensions")]),e._v(": AMD since Zen microarchitecture, or Intel since Ice Lake. Lack of SHA Extensions results in a very significant slow down.")]),e._v(" "),r("h3",{attrs:{id:"ram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ram"}},[e._v("#")]),e._v(" RAM")]),e._v(" "),r("p",[r("strong",[e._v("128 GiB of RAM")]),e._v(" are needed at the very least. This "),r("strong",[e._v("should")]),e._v(" be complemented with "),r("strong",[e._v("256 GiB of swap on a very fast NVMe SSD")]),e._v(" storage medium.")]),e._v(" "),r("h3",{attrs:{id:"gpu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpu"}},[e._v("#")]),e._v(" GPU")]),e._v(" "),r("p",[e._v("A powerful GPU is "),r("strong",[e._v("recommended")]),e._v(" as it can significantly speed up SNARK computations. See below for operations which can take advantange of GPU presence.")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/filecoin-project/bellman#supported--tested-cards",target:"_blank",rel:"noopener noreferrer"}},[e._v("authoritative list of supported GPUs"),r("OutboundLink")],1),e._v(" is in the "),r("a",{attrs:{href:"https://github.com/filecoin-project/bellman#supported--tested-cards",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bellman repository"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Additional GPU models need to be enabled manually ("),r("RouterLink",{attrs:{to:"/mine/venus/gpus.html"}},[e._v("instructions for Venus")]),e._v(").")],1),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Mixing AMD and Nvidia GPUs in the same machine is known to cause issues with OpenCL and should be avoided.")])]),e._v(" "),r("h3",{attrs:{id:"disk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disk"}},[e._v("#")]),e._v(" Disk")]),e._v(" "),r("p",[e._v("Performance of Miner operations can be heavily affected by slow disks. For example, a 32GiB expands to ~480GiB during the sealing process. Filecoin network parameters are over 100GiB and need to be read and verified during Miner start. As mentioned above, lack of RAM needs to be addressed with a fast swap drive or file.")]),e._v(" "),r("p",[e._v("For this reasons, a minimal amount of 1TiB NVMe-based disk space for cache storage is recommended. This disk should be used to store data during the sealing process, to cache Filecoin parameters and serve as general temporal storage location.")]),e._v(" "),r("p",[e._v('Additional hard drives for the final storage of "sealed sectors", the Venus chain etc. will be needed as well.')]),e._v(" "),r("h2",{attrs:{id:"specific-operation-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specific-operation-requirements"}},[e._v("#")]),e._v(" Specific operation requirements")]),e._v(" "),r("p",[e._v("As mentioned, the Miners have to perform operations of different nature which differ in how they use CPU and GPU resources. The following table shows how resources are utilized depending on the sealing phase or proof calculation being run:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Operation")]),e._v(" "),r("th",[e._v("CPU used")]),e._v(" "),r("th",[e._v("GPU used")]),e._v(" "),r("th",[e._v("Memory (32Gib sectors)")]),e._v(" "),r("th",[e._v("Notes")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Sealing: preCommit phase 1")]),e._v(" "),r("td",[e._v("Yes (1 core or 1 core-complex)")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("128GiB")]),e._v(" "),r("td",[e._v("PoRep SDR encoding. Not amenable to parallelization. Core usage depends on value of "),r("a",{attrs:{href:"https://github.com/filecoin-project/rust-fil-proofs/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("FIL_PROOFS_USE_MULTICORE_SDR")]),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("tr",[r("td",[e._v("Sealing: preCommit phase 2")]),e._v(" "),r("td",[e._v("Yes (when no GPU, all cores)")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("128GiB")]),e._v(" "),r("td",[e._v("Merkle tree generation using the Poseidon hashing algorithm. Slower with just CPUs.")])]),e._v(" "),r("tr",[r("td",[e._v("Sealing: commit phase 1")]),e._v(" "),r("td",[e._v("Yes (all cores)")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Sealing: commit phase 2")]),e._v(" "),r("td",[e._v("Yes (when no GPU, all cores)")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("~ 192GiB")]),e._v(" "),r("td",[e._v("Slow with just CPUs.")])]),e._v(" "),r("tr",[r("td",[e._v("Unsealing")]),e._v(" "),r("td",[e._v("Yes (1 core)")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("128GiB")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v("Proving "),r("em",[e._v("WindowPoSt")])]),e._v(" "),r("td",[e._v("Yes (all cores, when no GPU)")]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td",[r("em",[e._v("WindowPoSts")]),e._v(" must be submitted in 30 minute windows. When no GPU available, the more CPU cores the faster")])]),e._v(" "),r("tr",[r("td",[e._v("Proving "),r("em",[e._v("WinningPoSt")])]),e._v(" "),r("td",[e._v("Yes")]),e._v(" "),r("td",[e._v("No")]),e._v(" "),r("td",[e._v("-")]),e._v(" "),r("td",[r("em",[e._v("WinningPoSt")]),e._v(" is a less intensive computation. Must be completed in a 25 seconds window.")])])])]),e._v(" "),r("h2",{attrs:{id:"about-hardware-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about-hardware-requirements"}},[e._v("#")]),e._v(" About hardware requirements")]),e._v(" "),r("p",[e._v("The above requirements will not increase in the presumable future, and money spent on hardware should provide users with many years of reliable service, paying for themselves several times over.")])])}),[],!1,null,null,null);t.default=s.exports}}]);