# DDD boilerplate with Node.js + Express + TypeScript

## 概要

Node.js + Expressのサーバ構築の際にDDDで実装したいと思い、
そうするとデータ型やinterfaceがあるTypeScriptの方がよさそう、
ということで作ってみたときのテンプレートです。

## 参考

https://github.com/Microsoft/TypeScript-Node-Starter
https://github.com/joshuaalpuerto/node-ddd-boilerplate

## アーキテクチャ

### 設計方針

* DDD(ドメイン駆動設計)

### サーバー

* Language: Node.js, TypeScript
* Web Framework: Express

* DB: MySQL
* ORM: Sequelize

### クライアント

* JavaScript

## 環境構築手順

```sh
express --pug {project_name}

cd {project_name}
git init
```
