# Build An Alexa Meal Recommendation Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

## Setup w/ ASK CLI

### About
This readme assumes you have your developer environment ready to go and that you have some familiarity with CLI (Command Line Interface) Tools, [AWS](https://aws.amazon.com/), and the [ASK Developer Portal](https://developer.amazon.com/alexa-skills-kit?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=the-foodie-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_the-foodie-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs). If not, [click here](./1-voice-user-interface.md) for a more detailed walkthrough.

### Pre-requisites

* Node.js (> v8)
* Register for an [AWS Account](https://aws.amazon.com/)
* Register for an [Amazon Developer Account](https://developer.amazon.com?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=the-foodie-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_the-foodie-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)
* Install and Setup [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=the-foodie-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_the-foodie-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs)

* Download and Install [Git Hub Desktop](https://desktop.github.com/) to assist using Windows. The Git Hub Bash shell is installed. On Windows 10 run from Start menu. 


### Installation
1. **Make sure** you are running the latest version of the CLI

	```bash
	$ npm update -g ask-cli
	```

2. **Clone** the repository.

	```bash
	$ git clone https://github.com/alexa/skill-sample-nodejs-the-foodie/
	```

3. If it's your first time using it, **initiatialize** the [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=the-foodie-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_the-foodie-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) by navigating into the repository and running npm command: `ask init`. Follow the prompts.

	```bash
	$ cd skill-sample-nodejs-the-foodie
	$ ask init
	```

4. Install npm dependencies by navigating into the `/lambda/custom` directory and running the npm command: `npm install --save`

	```bash
	$ cd lambda/custom
	$ npm install
	```

### Deployment

ASK CLI **will create the skill and the lambda function for you**. The Lambda function will be created in ```us-east-1 (Northern Virginia)``` by default.

1. Navigate to the project's root directory. you should see a file named 'skill.json' there.
2. Deploy the skill and the lambda function in one step by running the following command:

	```bash
	$ ask deploy
	```

3. Once deployed, additional permissions need to be added to the AWS IAM role being used by the skill since it is persisting data in Amazon DynamoDB.  Navigate to the [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles).

	> _Note: We are adding the full access policy here for convenience.  For a production skill, you should use a more targeted policy restricting access to just the required resources.  Refer to the [DynamoDB documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-overview.html) for more details._

	1. Locate the role for your skill (by default, it is named ```ask-lambda-<your skill name>```). For example 'ask-lambda-the-foodie'. In browser reduce screen size to 75% to see all the AWS IAM role names.

	1. Click on the role, then click **Attach Policy**.
	1. Search for **AmazonDynamoDBFullAccess** and click the check box next to it.
	1. Click **Attach Policy**.

### Testing

1. To test, you need to login to Alexa Developer Console, and **enable the "Test" switch on your skill from the "Test" Tab**.

2. Simulate verbal interaction with your skill through the command line (this might take a few moments) using the following example:

	```bash
	 $ ask simulate -l en-US -t "tell the foodie i am on the vegan diet"

	 ✓ Simulation created for simulation id: 4a7a9ed8-94b2-40c0-b3bd-fb63d9887fa7
	◡ Waiting for simulation response{
	  "status": "SUCCESSFUL",
	  ...
	 ```

3. Once the "Test" switch is enabled, your skill can be tested on devices associated with the developer account as well. Speak to Alexa from any enabled device, from your browser at [echosim.io](https://echosim.io/welcome), or through your Amazon Echo and say : Alexa <pause> tell the foodie "i am on the vegan diet"


	In the Test area next microphone type

	**tell the foodie "i am on the vegan diet"**

     The reply will be "What time of day is it?"

     Type *12:00* in the Test box

	The reply is "Lunch, I love lunch I know quite a few great options...." 

	Now reply to the questions, with your answers. To interupt say **stop**

4. Eventaully you can change the responses the utterances. Remember to re-deploy when you make a major change with ASK-cli
 

	
## Customization

1. ```./skill.json```

   Change the skill name, example phrase, icons, testing instructions etc ...

   Remember than many information are locale-specific and must be changed for each locale (en-GB and en-US)

   See the Skill [Manifest Documentation](https://developer.amazon.com/docs/smapi/skill-manifest.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Survey&sc_detail=the-foodie-nodejs-V2_CLI-3&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Survey_the-foodie-nodejs-V2_CLI-3_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) for more information.

2. ```./lambda/custom/index.js```

   Modify messages, and data from the source code to customize the skill.

3. ```./models/*.json```

	Change the model definition to replace the invocation name and the sample phrase for each intent.  Repeat the operation for each locale you are planning to support.

$ cp en-US.json  en-GB.json

4. Remember to re-deploy your skill and lambda function for your changes to take effect.

     In ASK-cli


     
 
     $ ask deploy --force     ** re-deploy needs the --force switch

## Supporting other English Regions

1. 
      Make new region model

     In ASK-cli

2. ```./models/*.json```

     $ cp en-US.json  en-GB.json 

3.   In ASK-cli force an update of above changes to Alexa development console

     $ cd ..

     $ ask deploy --force

## Certification of other Languages and regions

1.   For other regions like Germany, India,Japan you must replace all the English utterances with local language. 

     In Lamdba index.js create one Lambda Function for each Language. 

     Set the defaults in the files ~/.aws/config, in skills.js, in en-DE.js to the local language.

2.   You will find it easier to make seperate directories and convert the files and make a skill for each local language.

3.   Beware that in there is only one allocated server per region, US, Europe, Asia capable of supporting Lambda.

 
