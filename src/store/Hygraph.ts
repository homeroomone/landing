// Svelte
import { writable } from 'svelte/store'
// Helpers
import { clientQuery } from '../helpers'

export const hygraph: any = writable([])
let loaded = false

export const getLandingPageData = async () => {
  if (loaded) return

  const query = `#graphql
    query {
      wYvcj5mHatLAFO6ygDkzsTpMRKlEnJSZGoVNwi8h {
        hero {
          titleColorOne
          titleColorTwo
          description
          graphic {
            url
          }
        }
        whyHomeroomOne {
          title
          description
          informationCard {
            ... on InformationCard {
              description
              image {
                url
              }
              title
            }
          }
        }
        informationAndGraphic8020 {
          titleColorOne
          description
          graphic {
            url
          }
        }
        reportsInformationAndGraphic {
          titleColorOne
          description
          graphic {
            url
          }
        }
        contactBanner {
          titleColorOne
          description
        }
      }
    }
  `

  clientQuery(query)
    .then((response) => {
      hygraph.set(response.wYvcj5mHatLAFO6ygDkzsTpMRKlEnJSZGoVNwi8h[0])
      loaded = true
    })
    .catch((error) => {
      console.error(`CMS Error: ${JSON.stringify(error)}`)
      loaded = false
    })
}
