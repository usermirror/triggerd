---
id: custom-trigger
title: Custom Trigger
sidebar_label: Custom Trigger
---

Heres an example `Trigger` in Kubernetes:

```yaml
apiVersion: triggerd.org/v1beta1
kind: Trigger
metadata:
  name: example-trigger
spec:
  httpTrigger:
    port: 8080
    upstream:
      type: strict_dns
      connect_timeout_ms: 30
      lb_type: maglev
      hosts:
      - url: "tcp://some-service"
```