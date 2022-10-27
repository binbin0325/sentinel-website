import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
        {
          title: 'Sentinel 1.8.6 released',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.8.6 has been released with initial support for OpenSergo fault-tolerance spec.',
          dateStr: 'Oct 27th，2022',
          link: '/en-us/blog/sentinel-1-8-6-release.html',
        },
        {
          title: 'Sentinel 1.8.5 released',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.8.5 has been released with cool features including Apache Dubbo 3.x support.',
          dateStr: 'Aug 9th，2022',
          link: '/en-us/blog/sentinel-1-8-5-release.html',
        },
        {
          title: 'Sentinel Go v1.0.4 released',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel Go v1.0.4 has been released with cool features like Prometheus metric exporter and improved circuit breaker half-open recovery strategy.',
          dateStr: 'Jan 10th，2022',
          link: '/en-us/blog/sentinel-go-1-0-4-release.html',
        },
        {
          title: 'Sentinel 1.8.3 released',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.8.3 has been released with cool features including JMX metric exporter support and Envoy RLS v3 API support.',
          dateStr: 'Dec 31st，2021',
          link: '/en-us/blog/sentinel-1-8-3-release.html',
        },
        {
          title: 'Sentinel Go v1.0.0 GA released',
          img: '/img/sentinel-go-logo.png',
          content: 'Sentinel Go v1.0.0 has been released, indicating production-ready and generally-available.',
          dateStr: 'Nov 28th，2020',
          link: '/en-us/blog/sentinel-go-ga-release.html',
        },
        {
          title: 'Sentinel 1.8.0 released',
          img: '/img/sentinel-and-quarkus.png',
          content: 'Sentinel 1.8.0 annual version released with cool features like circuit breaking improvements and Quarkus support.',
          dateStr: 'Aug 20th，2020',
          link: '/en-us/blog/sentinel-1-8-0-release.html',
        },
        {
          title: 'Sentinel 1.7.2 released',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.7.2 released with cool features including Logger SPI support, SOFARPC integration and Zuul 2.x gateway flow control.',
          dateStr: 'Apr 8th，2020',
          link: '/en-us/blog/sentinel-1-7-2-release.html',
        },
        {
          title: 'Sentinel 1.7.1 released',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.7.1 released with Spring WebMvc integration and improvements for Dubbo 2.7.x asynchronous mode.',
          dateStr: 'Dec 25th，2019',
          link: '/en-us/blog/sentinel-1-7-1-release.html',
        },
        {
          title: 'Sentinel 1.7.0 released',
          img: '/img/sentinel-envoy-rls-overview.png',
          content: 'Sentinel 1.7.0 released with Envoy global rate limiting support.',
          dateStr: 'Nov 11th，2019',
          link: '/en-us/blog/sentinel-1-7-0-release.html',
        },
        {
          title: 'Sentinel 1.6.0 released',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.6.0 released with flow control support for API gateways including Spring Cloud Gateway and Zuul.',
          dateStr: 'Apr 24th，2019',
          link: '/en-us/blog/sentinel-1-6-0-release.html',
        },
        {
          title: 'Sentinel 1.5.0 released',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.5.0 released with attracting features including reactive support and occupiable sliding window.',
          dateStr: 'Mar 14th，2019',
          link: '/en-us/blog/sentinel-1-5-0-release.html',
        },
        {
          img: '/img/DZyHFgnWAAEfldY.jpg',
          title: 'Sentinel 1.4.2 released',
          content: '',
          dateStr: 'Feb 21st，2019',
          link: '/en-us/blog/sentinel-1-4-2-release.html',
        },
        {
          img: '/img/brhtqqzh.jpeg',
          title: 'Sentinel 1.4.1 released',
          content: 'Sentinel 1.4.1 released with the improvement of Sentinel cluster flow control.',
          dateStr: 'Jan 4th，2019',
          link: '/en-us/blog/sentinel-1-4-1-release.html',
        },
      ]
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Feel free to contact us via the following channel.',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Mailing List',
          link: 'mailto:sentinel@linux.alibaba.com'
        },
        {
          img: '/img/alibaba.png',
          imgHover: '/img/alibaba_hover.png',
          title: 'Gitter',
          link: 'https://gitter.im/alibaba/Sentinel',
        },
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Google Groups',
          link: 'https://groups.google.com/forum/#!forum/sentinel-users'
        },
        {
          img: '/img/twitter.png',
          imgHover: '/img/twitter_hover.png',
          title: 'Twitter',
          link: 'https://twitter.com/AlibabaSentinel',
        },
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'Any kinds of contributions are welcomed!',
      list: [
        {
          img: '/img/mailinglist.png',
          title: 'Mailing List',
          content: <p>Discuss in the <a href="mailto:sentinel@linux.alibaba.com">mailing list</a></p>,
        },
        {
          img: '/img/issue.png',
          title: 'Issue',
          content: <p>Report bugs and request features in <a href="https://github.com/alibaba/Sentinel/issues">GitHub Issues</a></p>,
        },
        {
          img: '/img/documents.png',
          title: 'Documents',
          content: <span>Improve the document and blog posts</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>Send a <a href="https://github.com/alibaba/Sentinel/pulls">PR</a> to contribute</span>,
        },
      ],
    },
    ecos: {
      title: 'Eco System',
      list: [
        {
          title: 'Microservices',
          content: <span>Sentinel provides integration modules for commonly-used microservice frameworks and libraries.</span>,
          tags: [
            {
              text: 'Spring Cloud',
              link: 'https://github.com/spring-cloud-incubator/spring-cloud-alibaba',
              bgColor: '#00D0D9',
            },
            {
              text: 'gRPC',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-grpc-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Quarkus',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-quarkus-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Servlet',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-web-servlet',
              bgColor: '#00D0D9',
            },
            {
              text: 'Apache Dubbo',
              link: 'https://github.com/dubbo/dubbo-sentinel-support',
              bgColor: '#00D0D9',
            },

            {
              text: 'Spring WebFlux',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-spring-webflux-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Reactor',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-reactor-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'SOFARPC',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-sofa-rpc-adapter',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: 'API Gateway',
          content: <span>Sentinel provides integration modules for widely-used API gateways.</span>,
          tags: [
            {
              text: 'Zuul 1.x',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-zuul-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Spring Cloud Gateway',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-spring-cloud-gateway-adapter',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: 'Service Mesh',
          content: <span>Sentinel provides integration modules for service mesh.</span>,
          tags: [
            {
              text: 'Istio/Envoy',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-cluster/sentinel-cluster-server-envoy-rls',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: 'Dynamic Rule Sources',
          content: <span>Sentinel provides dynamic rule source extensions with various config centers.</span>,
          tags: [
            {
              text: 'Nacos',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-nacos',
              bgColor: '#00D0D9',
            },
            {
              text: 'ZooKeeper',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-zookeeper',
              bgColor: '#00D0D9',
            },
            {
              text: 'Apollo',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-apollo',
              bgColor: '#00D0D9',
            },
            {
              text: 'Redis',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-redis',
              bgColor: '#00D0D9',
            },
            {
              text: 'etcd',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-etcd',
              bgColor: '#00D0D9',
            },
            {
              text: 'Consul',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-consul',
              bgColor: '#00D0D9',
            },
            {
              text: 'Spring Cloud Config',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-spring-cloud-config',
              bgColor: '#00D0D9',
            },
            {
              text: 'Kubernetes CRD',
              link: 'https://github.com/sentinel-group/sentinel-go-datasource-k8s-crd',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: 'Polyglot Support',
          content: <span>Sentinel provides polyglot implementations.</span>,
          tags: [
            {
              text: 'Java',
              link: 'https://github.com/alibaba/Sentinel',
              bgColor: '#7A63FC',
            },
            {
              text: 'Go',
              link: 'https://github.com/alibaba/sentinel-golang',
              bgColor: '#7A63FC',
            },
            {
              text: 'Rust',
              link: 'https://github.com/sentinel-group/sentinel-rust',
              bgColor: '#7A63FC',
            },
            {
              text: 'C++',
              link: 'https://github.com/alibaba/sentinel-cpp',
              bgColor: '#00D0D9',
            },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
      list: [
        {
          title: 'Sentinel 1.8.6 版本发布，初步支持 OpenSergo 流量治理标准',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.8.6 版本发布，初步支持 OpenSergo 流控降级与容错等流量治理标准。',
          dateStr: 'Oct 27th，2022',
          link: '/zh-cn/blog/sentinel-1-8-6-release.html',
        },
        {
          title: 'Sentinel 1.8.5 版本发布',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.8.5 版本发布，正式支持 Dubbo 3.x。',
          dateStr: 'Aug 9th，2022',
          link: '/zh-cn/blog/sentinel-1-8-5-release.html',
        },
        {
          title: 'Sentinel 1.8.4 版本发布',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.8.4 版本发布，带来多项特性改进与 bug 修复。',
          dateStr: 'Apr 12nd, 2022',
          link: '/zh-cn/blog/sentinel-1-8-4-release.html',
        },
        {
          title: 'Sentinel Go v1.0.4 发布',
          img: '/img/sentinel-go-logo.png',
          content: 'Sentinel Go v1.0.4 版本发布，带来 Prometheus metric exporter 等多项特性改进与 bug 修复。',
          dateStr: 'Jan 10th，2022',
          link: '/zh-cn/blog/sentinel-go-1-0-4-release.html',
        },
        {
          title: 'Sentinel 1.8.3 版本发布',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.8.3 版本发布，带来 JMX exporter 等多项特性改进与 bug 修复。',
          dateStr: 'Dec 31st，2021',
          link: '/zh-cn/blog/sentinel-1-8-3-release.html',
        },
        {
          title: 'Sentinel 1.8.2 版本发布',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.8.2 版本发布，带来多项特性改进与 bug 修复。',
          dateStr: 'Jul 6th，2021',
          link: '/zh-cn/blog/sentinel-1-8-2-release.html',
        },
        {
          title: 'Sentinel Go 正式 GA，助力云原生服务稳稳稳',
          img: '/img/sentinel-go-logo.png',
          content: 'Sentinel Go 1.0 GA 版本正式发布，标志着 Go 版本正式进入生产可用阶段。',
          dateStr: 'Nov 28th，2020',
          link: '/zh-cn/blog/sentinel-go-ga-release.html',
        },
        {
          title: 'Sentinel Go 0.6.0 发布，支持 Warm-Up 预热流控',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel Go 0.6.0 发布，带来了 Warm-Up 预热流控、go-micro 框架适配等全新特性。',
          dateStr: 'Sep 2nd，2020',
          link: '/zh-cn/blog/sentinel-golang-0-6-0-release.html',
        },
        {
          title: 'Sentinel 1.8.0 年度版本发布，熔断降级重构升级',
          img: '/img/unstable-dependency-cascade-failure.png',
          content: 'Sentinel 1.8.0 年度版本发布，带来了完善升级版的熔断降级及云原生开源生态。',
          dateStr: 'Aug 20th，2020',
          link: '/zh-cn/blog/sentinel-1-8-0-release.html',
        },
        {
          title: 'Sentinel Go 0.5.0 发布',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel Go 0.5.0 版本发布，完善核心功能及性能，同时带来了 Consul 和 Nacos 数据源扩展支持。',
          dateStr: 'July 29th，2020',
          link: '/zh-cn/blog/sentinel-golang-0-5-0-release.html',
        },
        {
          title: 'Sentinel Go 0.4.0 发布，支持热点流量防护能力',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel Go 0.4.0 版本发布，带来了热点参数流控特性。',
          dateStr: 'June 29th，2020',
          link: '/zh-cn/blog/sentinel-golang-0-4-0-release.html',
        },
        {
          title: 'Sentinel Go 0.3.0 发布，支持熔断降级能力',
          img: '/img/unstable-dependency-cascade-failure.png',
          content: 'Sentinel Go 0.3.0 版本发布，带来了熔断降级规则、etcd 动态数据源等全新特性。',
          dateStr: 'May 25th，2020',
          link: '/zh-cn/blog/sentinel-golang-0-3-0-release.html',
        },
        {
          title: 'Sentinel 1.7.2 正式发布',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.7.2 版本发布，带来了 Logger SPI 扩展机制、Zuul 2.x 网关流控、SOFARPC 适配等多项特性和改进。',
          dateStr: 'Apr 8th，2020',
          link: '/zh-cn/blog/sentinel-1-7-2-release.html',
        },
        {
          title: 'Sentinel Go 0.2.0 发布，完善易用性与开源生态',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel Go 0.2.0 版本发布，新增 gRPC、Gin、Dubbo-go 等框架的适配，新增动态文件数据源支持。',
          dateStr: 'Mar 30th，2020',
          link: '/zh-cn/blog/sentinel-golang-0-2-0-release.html',
        },
        {
          title: '迈向云原生，Sentinel Golang 首个版本发布',
          img: '/img/sentinel-go-logo.png',
          content: 'Sentinel 多语言俱乐部迎来新的一员 —— Sentinel Golang 首个原生版本 0.1.0 正式发布！',
          dateStr: 'Feb 13th，2020',
          link: '/zh-cn/blog/sentinel-golang-v1-go-go-go.html',
        },
        {
          title: 'Sentinel 1.7.1 正式发布',
          img: '/img/brhtqqzh.jpeg',
          content: 'Sentinel 1.7.1 版本发布，带来了 Spring Web 模块适配、Dubbo 异步模式适配改进、控制台 ACL 注解扩展等多项特性和改进。',
          dateStr: 'Dec 25th，2019',
          link: '/zh-cn/blog/sentinel-1-7-1-release.html',
        },
        {
          title: 'Sentinel 1.7.0 正式发布',
          img: '/img/sentinel-envoy-rls-overview.png',
          content: 'Sentinel 1.7.0 版本发布，引入了 Envoy 集群流量控制支持等多项新特性与改进。',
          dateStr: 'Nov 11th，2019',
          link: '/zh-cn/blog/sentinel-1-7-0-release.html',
        },
        {
          title: 'Sentinel 1.6.3 正式发布',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.6.3 版本发布，引入网关流控控制台支持。',
          dateStr: 'July 29th，2019',
          link: '/zh-cn/blog/sentinel-1-6-3-release.html',
        },
        {
          title: 'Sentinel 1.6.0 正式发布',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.6.0 版本正式发布，引入对 Spring Cloud Gateway 等主流 API Gateway 的场景化流控支持。',
          dateStr: 'Apr 24th，2019',
          link: '/zh-cn/blog/sentinel-1-6-0-release.html',
        },
        {
          img: '/img/brhtqqzh.jpeg',
          title: 'Sentinel 1.5.1 正式发布',
          content: 'Sentinel 1.5.1 版本正式发布，主要包含一些 bug 修复和功能改进，同时添加了兼容 Dubbo 2.7.x 的适配模块。',
          dateStr: 'Mar 28th，2019',
          link: '/zh-cn/blog/sentinel-1-5-1-release.html',
        },
        {
          title: 'Sentinel 1.5.0 正式发布',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.5.0 版本正式发布，引入 Reactive 支持、滑动窗口占用机制等多项新特性。',
          dateStr: 'Mar 14th，2019',
          link: '/zh-cn/blog/sentinel-1-5-0-release.html',
        },
        {
          title: 'Sentinel 1.4.2 正式发布',
          img: '/img/DZyHFgnWAAEfldY.jpg',
          content: 'Sentinel 1.4.2 版本发布，引入 Zuul 1.x 适配，完善了集群流控相关的功能。',
          dateStr: 'Feb 21st，2019',
          link: '/zh-cn/blog/sentinel-1-4-2-release.html',
        },
        {
          img: '/img/brhtqqzh.jpeg',
          title: 'Sentinel 1.4.1 正式发布',
          content: 'Sentinel 1.4.1 版本发布，完善 Sentinel 控制台的集群流控管理功能。',
          dateStr: 'Jan 4th，2019',
          link: '/zh-cn/blog/sentinel-1-4-1-release.html',
        },
        {
          img: '/img/brhtqqzh.jpeg',
          title: 'Sentinel 1.3.0 GA 正式发布',
          content: 'Sentinel 1.3.0 GA 版本正式发布，提供功能完善的控制台。',
          dateStr: 'Oct 30th，2018',
          link: '/zh-cn/blog/sentinel-1-3-0-release.html',
        },
        {
          img: '/img/brhtqqzh.jpeg',
          title: 'Sentinel 0.2.0 重磅发布',
          content: '介绍 Sentinel 0.2.0 的核心功能，包括异步调用支持、热点参数限流等。',
          dateStr: 'Sep 27th，2018',
          link: '/zh-cn/blog/sentinel-0-2-0-release.html',
        },
      ]
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过一下方式联系我们。',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: '邮件列表',
          link: 'mailto:sentinel@linux.alibaba.com'
        },
        {
          img: '/img/alibaba.png',
          imgHover: '/img/alibaba_hover.png',
          title: 'Gitter',
          link: 'https://gitter.im/alibaba/Sentinel',
        },
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Google Groups',
          link: 'https://groups.google.com/forum/#!forum/sentinel-users'
        },
        {
          img: '/img/twitter.png',
          imgHover: '/img/twitter_hover.png',
          title: 'Twitter',
          link: 'https://twitter.com/AlibabaSentinel',
        },
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: 'Sentinel 社区欢迎任何形式的贡献！',
      list: [
        {
          img: '/img/mailinglist.png',
          title: '邮件列表',
          content: <p>在 <a href="mailto:sentinel@linux.alibaba.com">邮件列表</a> 参与讨论</p>,
        },
        {
          img: '/img/issue.png',
          title: 'Issue',
          content: <p>通过 <a href="https://github.com/alibaba/Sentinel/issues">GitHub Issues</a> 来报告缺陷或提交反馈</p>,
        },
        {
          img: '/img/documents.png',
          title: '文档',
          content: <span>完善 Sentinel 相关文档或文章</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <p>提交 <a href="https://github.com/alibaba/Sentinel/pulls">Pull Request</a> 来修复问题或贡献 Feature</p>,
        },
      ],
    },
    ecos: {
      title: '生态系统',
      list: [
        {
          title: '微服务生态',
          content: <span>Sentinel 针对微服务生态中常用的框架和库进行了适配。</span>,
          tags: [
            {
              text: 'Spring Cloud',
              link: 'https://github.com/spring-cloud-incubator/spring-cloud-alibaba',
              bgColor: '#00D0D9',
            },
            {
              text: 'Apache Dubbo',
              link: 'https://github.com/dubbo/dubbo-sentinel-support',
              bgColor: '#00D0D9',
            },
            {
              text: 'Quarkus',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-quarkus-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Servlet',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-web-servlet',
              bgColor: '#00D0D9',
            },
            {
              text: 'gRPC',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-grpc-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Spring WebFlux',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-spring-webflux-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Reactor',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-reactor-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'SOFARPC',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-sofa-rpc-adapter',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: 'API Gateway 生态',
          content: <span>Sentinel 针对常用的 API Gateway 提供开箱即用的集成模块。</span>,
          tags: [
            {
              text: 'Zuul 1.x',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-zuul-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Spring Cloud Gateway',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-spring-cloud-gateway-adapter',
              bgColor: '#00D0D9',
            },
            {
              text: 'Zuul 2.x',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-adapter/sentinel-zuul2-adapter',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: 'Service Mesh 生态',
          content: <span>Sentinel 支持对 Service Mesh 提供流量控制的能力。</span>,
          tags: [
            {
              text: 'Istio/Envoy',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-cluster/sentinel-cluster-server-envoy-rls',
              bgColor: '#7A63FC',
            },
            {
              text: 'MOSN',
              link: 'https://github.com/mosn/mosn/',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: '多语言生态',
          content: <span>Sentinel 提供主流编程语言的原生支持。</span>,
          tags: [
            {
              text: 'Java',
              link: 'https://github.com/alibaba/Sentinel',
              bgColor: '#7A63FC',
            },
            {
              text: 'Go',
              link: 'https://github.com/alibaba/sentinel-golang',
              bgColor: '#7A63FC',
            },
            {
              text: 'Rust',
              link: 'https://github.com/sentinel-group/sentinel-rust',
              bgColor: '#7A63FC',
            },
            {
              text: 'C++',
              link: 'https://github.com/alibaba/sentinel-cpp',
              bgColor: '#00D0D9',
            },
          ],
        },
        {
          title: '标准规范',
          content: <span>Sentinel 支持的流量治理相关标准规范</span>,
          tags: [
            {
              text: 'OpenSergo',
              link: 'https://opensergo.io/',
              bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: '动态规则源',
          content: <span>Sentinel 提供多种动态规则源适配。</span>,
          tags: [
            {
              text: 'Nacos',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-nacos',
              bgColor: '#00D0D9',
            },
            {
              text: 'ZooKeeper',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-zookeeper',
              bgColor: '#00D0D9',
            },
            {
              text: 'Apollo',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-apollo',
              bgColor: '#00D0D9',
            },
            {
              text: 'Redis',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-redis',
              bgColor: '#00D0D9',
            },
            {
              text: 'etcd',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-etcd',
              bgColor: '#00D0D9',
            },
            {
              text: 'Consul',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-consul',
              bgColor: '#00D0D9',
            },
            {
              text: 'Spring Cloud Config',
              link: 'https://github.com/alibaba/Sentinel/tree/master/sentinel-extension/sentinel-datasource-spring-cloud-config',
              bgColor: '#00D0D9',
            },
            {
              text: 'Kubernetes CRD',
              link: 'https://github.com/sentinel-group/sentinel-go-datasource-k8s-crd',
              bgColor: '#00D0D9',
            },
          ],
        },
      ],
    },
  },
};
