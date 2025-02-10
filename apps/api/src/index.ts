import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN', id: 'id' })

const userCanInviteSomeoneElse = ability.can('manage', 'User')

console.log(userCanInviteSomeoneElse)