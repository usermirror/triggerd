---
id: v1-triggerd-cli
title: Command Line Interface
sidebar_label: Command Line Interface
---

## Installation

First install `triggerd` with Homebrew on MacOS:

```shell
$ brew install triggerd
```

Or with NPM:

```shell
$ npm i -g triggerd
```

## Commands

```shell
$ triggerd --help

  triggerd [cmd] <...flags>

  commands
    start <port, host, config>  Start the triggerd server
    init <output>               Initialize based on this triggerd config
    stop <config>               Stop the triggerd server

  flags
    --config, -c         Config for triggerd server
    --config-file        Lookup path for config (default: .triggerdrc)
    --output             Output for this command (json, terraform, kubernetes)
    --port,   -P         Port to use for HTTP server (default: 4284) 
    --host,   -H         Host to use for HTTP server (default: 127.0.0.1)
```

## Start

To start a `triggerd` server with a specific config:

```yaml
# .triggerdrc
config:
  sources:
    spec:
      - plugin: kafka
        values:
          host: triggerd-kafka
      - plugin: nsq
        values:
          host: triggerd-nsq
```

```shell
$ triggerd start
$ triggerd start --config prod-triggerd.yml # or with custom config
```

## Stop

To stop a `triggerd` server with a specific config:

```shell
$ triggerd stop
$ triggerd stop --config prod-triggerd.yml # or with custom config
```