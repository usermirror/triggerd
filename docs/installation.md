---
id: installation
title: Installation
sidebar_label: Installation
---

Our recommended way of using `triggerd` is in combination with [`funk`](https://funk.sh)

## Funk Installation

[`funk`](https://docs.funk.sh) is an ephemeral compute layer to run functions on Kubernetes that can be called by HTTP requests or any source with `triggerd` by running:

```shell
$ funk up --plugins triggerd
```

## Kubernetes Installation

If you want to use `triggerd` without `funk` as a general-purpose webhook scheduler, then you can use the `triggerd init` helper command:

```shell
$ triggerd init --output kubernetes | kubectl apply -f -
```

## Terraform Installation

If you want to add `triggerd` to your Terraform-managed cluster, you can install our Terraform module:

```shell
$ triggerd init --output terraform > triggerd-module.tf
```

## Local Installation

First install `triggerd` with Homebrew on MacOS:

```shell
$ brew install triggerd
```

Or with NPM:

```shell
$ npm i -g triggerd
```