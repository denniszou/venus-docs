## venus-market 是什么?

`venus-market v2`是`Venus`存储系统给社区带来的最新的存储市场的解决方案。在提供了最大的灵活性的同时，他给予了存储提供者一个更无缝，更便捷的订单流程体验， 

## 功能特性

### 链服务部署

`venus-market v2`最大的特点之一就是它能被作为链服务的组件进行部署。当一个存储提供使用带有`venus-market v2`的链服务时，那么他/她本地将无需部署一个`market`节点。`venus-market v2`将负责链上的互动，以及告诉存储提供者在哪儿里获取订单的`piece`数据。

### 多传输协议支持

订单`piece`数据的传输将不仅支持默认的`graphsync`，还支持OSS，HTTP等其他更有韧性，可断点续传的数据传输协议。保证接单过程中数据传输的稳定性。

### 轻量级客户端

`venus-market v2`带有一个轻量级客户端。存储客户无需本地维护一个与主网保持同步的节点，只需接入一个链服务，便可轻松发出存储订单。

### 兼容其他实现

`venus-market v2`实现的所有订单流程都将与`Filecoin`其他实现的订单市场进行兼容。保证`Venus`存储提供者能够接收来自任何符合协议要求客户端的订单。

### 开发者友好

更多`venus-market v2`的API以及SDK将陆续开放给开发者。`venus-market v2`将成为一个开放平台，让开发者在上面实现他们需要的定制化需求。
