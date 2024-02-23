// import * as Sentry from "@sentry/vue";
// import { withScope } from '@sentry/vue'

export default defineNuxtPlugin(nuxtApp => {
    // Sentry.init({
    //     app: nuxtApp.vueApp,
    //     dsn: "https://b5dddb3a2674771ff1f70b69b3fc27c9@o4506180096688128.ingest.sentry.io/4506195688292352",
    //     integrations: [
    //       new Sentry.BrowserTracing({
    //         // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    //         tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    //         routingInstrumentation: Sentry.vueRouterInstrumentation(nuxtApp.$router),
    //       }),
    //       new Sentry.Replay(),
    //     ],
    //     // Performance Monitoring
    //     tracesSampleRate: 1.0, // Capture 100% of the transactions
    //     // Session Replay
    //     replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    //     replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    //   });
    
    // nuxtApp.vueApp.config.errorHandler = (err, context) => {
    //     withScope((scope) => {
    //         scope.setExtra('context', context)
    //         Sentry.captureException(err)
    //     })
    // }

    // nuxtApp.hook('app:error', (err) => {
    //     Sentry.captureException(err)
    // })

    // return {
    //     provide: {
    //         sentrySetContext: Sentry.setContext,
    //         sentrySetUser: Sentry.setUser,
    //         sentrySetTag: Sentry.setTag,
    //         sentryAddBreadcrumb: Sentry.addBreadcrumb,
    //         sentryCaptureException: Sentry.captureException,
    //     },
    // }
})