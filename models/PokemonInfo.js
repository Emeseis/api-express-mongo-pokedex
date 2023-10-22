import mongoose from 'mongoose';
import { pokemonSchema } from './Pokemon.js';

const pokemonInfoSchema = new mongoose.Schema({
  pokemon: { type: pokemonSchema },
  pokemonInfo: {
    abilities: [{
      ability: {
        name: String,
        url: String
      },
      is_hidden: Boolean,
      slot: Number
    }],
    base_experience: Number,
    base_happiness: Number,
    capture_rate: Number,
    color: {
      name: String,
      url: String
    },
    egg_groups: [{
      name: String,
      url: String
    }],
    evolution_chain: {
      url: String
    },
    evolve_from_species: {
      name: String,
      url: String
    },
    flavor_text_entries: [{
      flavor_text: String,
      language: {
        name: String,
        url: String
      },
      version: {
        name: String,
        url: String
      }
    }],
    form_descriptions: Array,
    forms: [{
      name: String,
      url: String
    }],
    forms_switchable: Boolean,
    game_indices: [{
      game_index: Number,
      version: {
        name: String,
        url: String
      }
    }],
    gender_rate: Number,
    genera: [{
      genus: String,
      language: {
        name: String,
        url: String
      }
    }],
    generation: {
      name: String,
      url: String
    },
    growth_rate: {      
      name: String,
      url: String
    },
    habitat: {      
      name: String,
      url: String
    },
    has_gender_differences: Boolean,
    hatch_counter: Number,
    height: Number,
    held_items: Array,
    id: Number,
    is_baby: Boolean,
    is_default: Boolean,
    is_legendary: Boolean,
    is_mythical: Boolean,
    location_area_encounters: String,
    moves: [{
      move: {
        name: String,
        url: String
      },
      version_group_details: [{
        level_learned_at: Number,
        move_learn_method: {
          name: String,
          url: String
        },
        version_group: {
          name: String,
          url: String
        }
      }]
    }],
    name: String,
    names: [{
      language: {
        name: String,
        url: String
      },
      name: String
    }],
    order: Number,
    order_specie: Number,
    pal_park_encounters: [{
      area: {        
        name: String,
        url: String
      },
      base_score: Number,
      rate: Number
    }],
    past_abilities: Array,
    past_types: Array,
    pokedex_numbers: [{
      entry_number: Number,
      pokedex: {
        name: String,
        url: String
      }
    }],
    shape: {
      name: String,
      url: String
    },
    species: {
      name: String,
      url: String
    },
    sprites: {
      back_default: String,
      back_female: String,
      back_shiny: String,
      back_shiny_female: String,
      front_default: String,
      front_female: String,
      front_shiny: String,
      front_shiny_female: String,
      other: Object,
      versions: Object
    },
    stats: [{
      base_stat: Number,
      effort: Number,
      stat: {
        name: String,
        url: String
      }
    }],
    types: Array,
    varieties: [{
      is_default: Boolean,
      pokemon: {
        name: String,
        url: String
      }
    }],
    weight: Number
  },
  pokemonNext: { type: pokemonSchema },
  pokemonPrev: { type: pokemonSchema },
  typeDefenses: {
    all: Number,
    bug: Number,
    dark: Number,
    dragon: Number,
    electric: Number,
    fairy: Number,
    fighting: Number,
    fire: Number,
    flying: Number,
    ghost: Number,
    grass: Number,
    ground: Number,
    ice: Number,
    normal: Number,
    poison: Number,
    psychic: Number,
    rock: Number,
    steel: Number,
    water: Number
  }
});

export default mongoose.model('pokemonInfo', pokemonInfoSchema);
