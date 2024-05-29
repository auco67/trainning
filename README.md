# trainning
## フォルダについて
- **src:**
サンプルのJSファイルを格納する。GitHubにpushする前に、```npm run format```を実行して自動整形すること
- **yaml:**
yaml形式のサンプルデータを格納する。
## ファイルについて
- **Dockerfile:**
コンテナ型の仮想環境のプラットフォームDockerを使用して環境構築を短縮化することができる。環境自体をコード化したファイルDockerfileから、イメージを取得し、そのイメージからコンテナを作成すれば、簡単に環境を構築できる
- **package.json:**
Node.jsプロジェクトにおける定義ファイルで、現在のプロジェクトの情報が記述されている。プロジェクトの情報として使用するパッケージやバージョンなどが定義されている
- **package-lock.json:**
npm installを実行した際にインストールされたパッケージが定義されている
- **.eslintrc.json:**
JavaScriptのコード品質やスタイルを自動的にチェックし一貫性を保つための静的解析ツールであるeslintというパッケージの定義ファイル。
コードチェックする際のグローバル変数やルールの継承(extends)、特定ファイルに対するルールの一部変更(overrides)、解析方法(parser)、カスタムルールの適用(plugins)が定義されている。
- **.prettierrc:**
コードのフォーマットやスタイルを自動的に整えるコードフォーマッターツールであるprettierというパッケージが自動整形する際の体裁ルールが定義されたファイル。
- **.prettierignore**
  prettierで自動整形させないファイルやフォルダが定義されたファイル。

## Dockerfile
Dockerがインストールされている環境でこのDockerfileからDockerイメージをビルドする。ビルドしたDockerイメージからDockerコンテナを作成し、Dockerコンテナを実行すると環境構築が自動的に作成される。
```
FROM node:20-bookworm-slim
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install
COPY .* ./
RUN npm run format
```
- **FROM:**
ミニマムなNode.js環境のDockerイメージを指定する。[node:20-bookworm-slim](https://hub.docker.com/_/node)は、Docker公式サイトでオフィシャルに公開しているイメージ。
- **WORKDIR:**
作業ディレクトリを作成する
- **COPY:**
指定のファイルを作業ディレクトリにコピーする
- **RUN:**
コマンドを実行する

### Dockerイメージをビルドする
Dockerがインストールされている環境下で、以下コマンドを実行する
```
docker build -t "image name" .
```
例）```nodejsenv```という名前のDockerイメージをビルドする場合（最後のピリオド「.」も必要）
```
docker build -t nodejsenv .
```
### Dockerイメージを確認する
Dockerがインストールされている環境下で、以下コマンドを実行する
```
docker image
```
正常にDockerイメージがビルドされると次のように表示される
```
REPOSITORY  TAG  IMAGE ID      CREATED              SIZE
nodejs      1.0  31e4578c64b4  About a minute age   245MB
```
### DockerイメージからDokcerコンテナを実行する
Dockerがインストールされている環境下で、以下コマンドを実行する
```
docker run -it --name "container name" "image id" /bin/bash
```
例）```nodejsenv```のイメージID```31e4578c64b4```から```nodejscon```という名前のDockerコンテナを実行する場合
```
docker run -it --name nodejscon 31e4578c64b4 /bin/bash
```
DockerFileに記載の通り、処理が実行され、実行環境にアクセスした状態となる
```
root@9241a27d6436: /usr/scr/app #
```
試しに、```npm run format```コマンドを実行してみる
```
root@9241a27d6436: /usr/scr/app # npm run format
```
次のようになれば正常に環境が構築できている
```
root@9241a27d6436: /usr/scr/app # npm run format

> chatbotslack@1.0.0 format
> prettier . --write

.eslintrc.json 72ms(unchanged)
package.json 5ms (unchanged)
root@9241a27d6436: /usr/scr/app #
```
