
# Set up a basic app with Vue JS

In this tutorial we will setup a basic app and add it to the appstore. We will learn you how to set up the app, set up widgets, authenticate and communicate with the API.

We will use [Vue 3 Composition API with Vite](https://vuejs.org/guide/quick-start.html)  for this example.

## Prerequirements

1. You need basic knowlage of git and we work with the [Github CLI](https://cli.github.com).
2. You need npm to install the github repository on your local host. [Install NPM](https://www.npmjs.com)

### Install 

Clone the basic app GIT repository to your local machine.

```bash
git clone https://github.com/CampingCare/basic-app-vue.git

cd basic-app-vue/
```

Install the node_modules with npm

```bash
npm install
```

### Start development server

The next step is to start-up your development server. 

```bash
npm run dev
```

Now the application will run on your local device, something like: `http://localhost:5173/`. You will see the default app url and it looks like this.

![basic vue app](../../static/img/tutorials/basic-vue-app.png)

## Create the app in the AppStore

Go to the App Store and create a new app. [Open the App Store](https://app.camping.care/apps)

![Add app](../../static/img/appstore/add-app.png)


:::tip
Need to know more about the App installation process, please read our App Store documentation. [App Store Documentation](../appstore/getting-started)
:::

### Widgets

This app supports a default app url and several widgets, you can set it up like this..

![App configuration](../../static/img/tutorials/basic-vue-app-configuration.png)

### Webhooks

In this example we don't use webhooks. For this you can checkout the [php basic app](./basic-app-laravel) or the documentation [here](../api/webhooks).

### Rights / Scopes

You don't need additional scopes for this app to operate. For this you can checkout the [php basic app](./basic-app-laravel) or the documentation [here](../api/rights).

Once you have set this op you can save the app and you will be redirected to the app page.

## Install the app

To test the app you'll need to install it after you saved it. [Read more about the install process](../appstore/install)

After installing the app you will see this screen.

![App result](../../static/img/tutorials/basic-vue-app-result.png)

Congratulations! You are now done, the basic app works!

## Go Live

The final think you need to do is upload your application to an public host. This can be any hosting company / cloud platform you prefer. For single page applications (PWA) as the one we have made [firestore hosting](https://firebase.google.com/docs/hosting) might be interesting for you. 

:::tip
This example is an front-end application only. Do you need to process server-side events like webhooks or server to server communication. You can use php or an ssr frameworks as Nuxt. [App Store Documentation](../appstore/getting-started)
:::