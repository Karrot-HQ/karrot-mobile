import { gql } from "@apollo/client";

// To do: add arguments, create lazy query
export const GET_RECIPE = gql`{
    recipes {
        id
        image
        imageType
        like
        title
        missedIngredientCount
        missedIngredients {
          aisle
          amount
          id
          image
          meta
          name
          original
          originalName
          unit
          unitLong
          unitShort
        }
        unusedIngredients {
          aisle
          amount
          id
          image
          meta
          name
          original
          originalName
          unit
          unitLong
          unitShort
        }
        usedIngredientCount
        usedIngredients {
          aisle
          amount
          id
          image
          meta
          name
          original
          originalName
          unit
          unitLong
          unitShort
        }
      }
}
`;

export const GET_RECIPE_INFO = gql`
query Query($ids: String, $includeNutrition: Boolean) {
    recipesInfo(ids: $ids, includeNutrition: $includeNutrition) {
      id
      title
      image
      imageType
      servings
      readyInMinutes
      license
      sourceName
      sourceUrl
      spoonacularSourceUrl
      aggregateLikes
      healthScore
      spoonacularScore
      pricePerServing
      analyzedInstructions
      cheap
      creditsText
      cuisines
      dairyFree
      diets
      gaps
      glutenFree
      instructions
      ketogenic
      lowFodmap
      occasions
      sustainable
      vegan
      vegetarian
      veryHealthy
      veryPopular
      whole30
      weightWatcherSmartPoints
      dishTypes
      extendedIngredients {
        aisle
        amount
        consistency
        id
        image
        meta
        name
        original
        originalName
        unit
      }
      summary
      winePairing {
        pairedWines
        pairingText
        productMatches {
          id
          title
          description
          price
          imageUrl
          averageRating
          ratingCount
          score
          link
        }
      }
    }
  }
`;
