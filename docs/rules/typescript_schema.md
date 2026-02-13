It describes how to validate data, and how to add your data schema.

## TL;DR
- Zod is used for data validation. Other library can be used if zod can't be used on the project.
- JSDoc is used on schemas too.


## Detail
### JSDoc

- Don't use z.somewhat().describe() or z.somewhat().meta() for JSDoc.
    - Why? It is unavailable on IDE. Primary goal of JSDoc is to be available on IDE.
    - Instead, use JSDoc on schema's property. It works.

```ts
import * as z from "zod";

export const SomeSchema = z.object({
    /**
     * Name of entry
     */
    name: z.string().default("Some name")
    /**
     * Description of entry
     */
    description: z.string().optional()
}).prefault({})

/**
 * Don't have to link original schema, since type definition is simple with z.output<typeof schema>.
 */
export type SomeType = z.output<typeof SomeSchema>;

/**
 * If type might not have default value, use z.input.
 */
export type SomeInputType = z.input<typeof SomeSchema>