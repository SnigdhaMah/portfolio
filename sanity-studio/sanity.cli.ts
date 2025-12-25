import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'
dotenv.config();

export default defineCliConfig({
  api: {
    projectId: 'ciui9csp',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: process.env.APP_ID
  }
})
