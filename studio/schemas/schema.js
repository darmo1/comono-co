// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import home from './home'
import homeEnglish from './homeEnglish'
import service from './service'
import serviceEnglish from './serviceEnglish'
import project from './project'
import projectEnglish from './projectEnglish'
import infoCompany from './infoCompany'
import infoCompanyEnglish from './infoCompanyEnglish'
import ourTeam from "./ourTeam"
import ourTeamEnglish from './ourTeamEnglish'
import post from './post'
import postEnglish from './postEnglish'
import author from './author'
import blockContent from './blockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    home,
    homeEnglish,
    service,
    serviceEnglish,
    project,
    projectEnglish,
    infoCompany,
    infoCompanyEnglish,
    ourTeam,
    ourTeamEnglish,
    post,
    postEnglish,
    author,
    blockContent,
  ]),
})
