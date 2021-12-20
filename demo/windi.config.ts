import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  /* configurations... */
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.xl') },
        button: {
          border: '1px solid black',
          padding: '.5rem',
          borderRadius: '1rem',
        },
      })
    }),
  ],
})
