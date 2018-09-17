#  Alexaでおすすめの食事を提案するスキルの開発 (Japanese)
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

## 概要

このワークショップでは「お食事ガイド」という、オススメの食事を提案してくれるスキルを作成します。スキルが起動すると、スキルは食事を提案するのに必要な情報を求めるいくつかの問いかけをします。必要な情報が全て集まったら、外部のWebサービスにアクセスして、データを処理しオススメの食事を返します。ユーザーは外で食べるか、お持ち帰りするか、自分で作るかを選択できます。

このワークショップを通して、高度なAlexa Skills Kitの機能を使ってAlexaスキルを作成したり、AWS Lambdaの設定方法を学ぶことができます。特にダイアログマネージメントやエンティティ解決の機能を学ぶことができます。これらの機能は、Alexaの自動音声認識(ASR), 自然言語処理(NLU)、機械学習(ML)を利用することでプログラムコードを書く量を大幅に減らすことができます。用意すべきものは、対話モデルを通してAlexaのエンジンに送り込む学習データのみです。それはスキルビルダーを使えば簡単にできます。



それでは、**Get Started** ボタンをクリックして始めてください。

[![Get Started](https://camo.githubusercontent.com/db9b9ce26327ad3bac57ec4daf0961a382d75790/68747470733a2f2f6d2e6d656469612d616d617a6f6e2e636f6d2f696d616765732f472f30312f6d6f62696c652d617070732f6465782f616c6578612f616c6578612d736b696c6c732d6b69742f7475746f7269616c732f67656e6572616c2f627574746f6e732f627574746f6e5f6765745f737461727465642e5f5454485f2e706e67)](./instructions/1-voice-user-interface.md)

もしくは [ここ](./instructions/7-cli.md) をクリックして ASK CLI（コマンドラインインターフェイスの使い方）に進んでください。

## 参考リソース

### コミュニティ
* [Amazon Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html) - Join the conversation!
* [Hackster.io](https://www.hackster.io/amazon-alexa) - See what others are building with Alexa.
* [AAJUG](https://www.facebook.com/groups/amazon.alexa.jp) - Amazon Alexa Japan Users Group(Facebook Group)

### チュートリアルとガイド
* [Voice Design Guide](https://developer.amazon.com/designing-for-voice/) - 会話と音声ユーザーインターフェースについて詳しく学習できます。

### ドキュメント
* [Official Alexa Skills Kit Node.js SDK](https://www.npmjs.com/package/alexa-sdk) - 公式 Node.js SDK のドキュメント
*  [Official Alexa Skills Kit Documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - 公式 Alexa Skills Kit のドキュメント


<!-- # Conversation and Memory

## The Foodie

<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Part 1: Build and Customize](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-off._TTH_.png)](./instructions/1-build-and-customize.md)[![Entity Resolution](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-off._TTH_.png)](./instructions/2-entity-resolution.md)[![Memory](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-off._TTH_.png)](./instructions/3-memory.md) -->


<!-- ## Pre-requistes

In order to start working on this workshop you will need:

*  <a href="https://aws.amazon.com" target="_new">AWS Account</a>
*  <a href="https://developer.amazon.com"
target="_new">Amazon Developer Account</a>


## Get Started

The workshop is composed of three parts:

*  Part 1: Build and Customize The Foodie
*  Part 2: Entity Resolution
*  Part 3: Memory

Each part contains a set of tasks that act as check points, and extra credit
that will present a challenge that will further enhance your learning.

**Note** You may use The Foodie as a starting point to build your own skill that
needs to collect information form the user and have processed via a web service.
You can customize the slots to match the data you need and change the hostname
to the web service you need to call.

If this is your first time here, you're new to Alexa Skills Development, you're interested in the "extra credit", or you're looking for more detailed instructions, click the **Get Started** button below:

<p align='center'>
<a href='./instructions/1-build-and-customize.md'><img src='https://camo.githubusercontent.com/db9b9ce26327ad3bac57ec4daf0961a382d75790/68747470733a2f2f6d2e6d656469612d616d617a6f6e2e636f6d2f696d616765732f472f30312f6d6f62696c652d617070732f6465782f616c6578612f616c6578612d736b696c6c732d6b69742f7475746f7269616c732f67656e6572616c2f627574746f6e732f627574746f6e5f6765745f737461727465642e5f5454485f2e706e67'></a>
</p>


Be sure to take a look at the [Additional Resources](#additional-resources) at the bottom of this page!


## About
**Note:** The rest of this readme assumes you have your developer environment ready to go and that you have some familiarity with CLI (Command Line Interface) Tools, [AWS](https://aws.amazon.com/), and the [ASK Developer Portal](https://developer.amazon.com/alexa-skills-kit). If not, [click here](./instructions/1-build-and-customize.md) for a more detailed walkthrough.

### Usage

```text
Alexa, tell the foodie I'm hungry.
	>> Howdy! Welcome to The Foodie. . .

Alexa, open The Foodie
```

### Repository Contents
* `/.ask`	- [ASK CLI (Command Line Interface) Configuration](https://developer.amazon.com/docs/smapi/ask-cli-intro.html)	 
* `/lambda/custom` - Back-End Logic for the Alexa Skill hosted on [AWS Lambda](https://aws.amazon.com/lambda/)
* `/models` - Voice User Interface and Language Specific Interaction Models
* `/instructions` - Step-by-Step Instructions for Getting Started
* `skill.json`	- [Skill Manifest](https://developer.amazon.com/docs/smapi/skill-manifest.html)

## Setup w/ ASK CLI

### Pre-requisites

* Node.js (> v4.3)
* Register for an [AWS Account](https://aws.amazon.com/)
* Register for an [Amazon Developer Account](https://developer.amazon.com/)
* Install and Setup [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

### Installation
1. Clone the repository.

	```bash
	$ git clone https://github.com/alexa/skill-sample-nodejs-the-foodie/
	```

2. Initiatialize the [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) by Navigating into the repository and running npm command: `ask init`. Follow the prompts.

	```bash
	$ cd skill-sample-nodejs-the-foodie
	$ ask init
	```

3. Install npm dependencies by navigating into the `/lambda` directory and running the npm command: `npm install`

	```bash
	$ cd lambda/custom
	$ npm install
	```


### Deployment

ASK CLI will create the skill and the lambda function for you. The Lambda function will be created in ```us-east-1 (Northern Virginia)``` by default.

1. Deploy the skill and the lambda function in one step by running the following command:

	```bash
	$ ask deploy
	```

2. Once deployed, additional permissions need to be added to the AWS IAM role being used by the skill since it is persisting data in Amazon DynamoDB.  Navigate to the [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles).

	> _Note: We are adding the full access policy here for convenience.  For a production skill, you should use a more targeted policy restricting access to just the required resources.  Refer to the [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-overview.html) for more details._

	1. Locate the role for your skill (by default, it is named ```ask-lambda-<your skill name>```). For example 'ask-lambda-the-foodie'. In browser reduce screen size to 75% to see all the AWS IAM role names.

	1. Click on the role, then click **Attach Policy**.
	1. Search for **AmazonDynamoDBFullAccess** and click the check box next to it.
	1. Click **Attach Policy**.

### Testing

1. To test, you need to login to [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) , select the skill and enable the "Test" switch on your skill from the "Test" Tab.

2. Simulate verbal interaction with your skill through the command line using the following example:

	```bash
	 $ ask simulate -l en-US -t "alexa, start the foodie"

	 ✓ Simulation created for simulation id: 4a7a9ed8-94b2-40c0-b3bd-fb63d9887fa7
	◡ Waiting for simulation response{
	  "status": "SUCCESSFUL",
	  ...
	 ```

3. Once the "Test" switch is enabled, your skill can be tested on devices associated with the developer account as well. Speak to Alexa from any enabled device, from your browser at [echosim.io](https://echosim.io/welcome), or through your Amazon Mobile App and say :

	```text
	Alexa, start the foodie
	```

## Customization

1. ```./skill.json```

   Change the skill name, example phrase, icons, testing instructions etc ...

   Remember that many information is locale-specific and must be changed for each locale (en-GB and en-US)

   See the Skill [Manifest Documentation](https://developer.amazon.com/docs/smapi/skill-manifest.html) for more information.

2. ```./lambda/custom/index.js```

   Modify messages, and facts from the source code to customize the skill.

3. ```./models/*.json```

	Change the model definition to replace the invocation name and the sample phrase for each intent.  Repeat the operation for each locale you are planning to support.

## Additional Resources

### Community
* [Amazon Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html) - Join the conversation!
* [Hackster.io](https://www.hackster.io/amazon-alexa) - See what others are building with Alexa.

### Tutorials & Guides
* [Voice Design Guide](https://developer.amazon.com/designing-for-voice/) - A great resource for learning conversational and voice user interface design.
* [CodeAcademy: Learn Alexa](https://www.codecademy.com/learn/learn-alexa) - Learn how to build an Alexa Skill from within your browser with this beginner friendly tutorial on CodeAcademy!

### Documentation
* [Official Alexa Skills Kit Documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - Official Alexa Skills Kit Documentation
* [Official Alexa Skills Kit Node.js SDK](https://www.npmjs.com/package/ask-sdk) - The Official Node.js SDK Documentation
