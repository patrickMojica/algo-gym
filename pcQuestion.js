const { forEach } = require('async');

/*
(base) patrickmojica@Patricks-MacBook-Pro src % node practichemRefactor.js
getUser:  John Doe
getLabs:  [
  { id: 4, name: 'Blue Origin' },
  { id: 2, name: 'JPL' },
  { id: 1, name: 'NASA' }
]
getLabRoles:  [
  { id: 1, user: 1, lab: 1, role: 'OWNER' },
  { id: 2, user: 1, lab: 2, role: 'MEMBER' },
  { id: 5, team: 2, lab: 1, role: 'ADMIN' },
  { id: 6, team: 2, lab: 2, role: 'ADMIN' },
  { id: 7, team: 2, lab: 4, role: 'GUEST' }
]
getHighestLabRole:  OWNER
hasLabRole:  true
*/

const USERS = [
  {id: 1, name: 'John Doe'},
]

const TEAMS = [
  {id: 1, name: 'Curiosity'},
  {id: 2, name: 'Perseverance'},
]

const LABS = [
  {id: 1, name: 'NASA'},
  {id: 2, name: 'JPL'},
  {id: 3, name: 'SpaceX'},
  {id: 4, name: 'Blue Origin'},
]

const USER_TEAMS = [
  {id: 1, user: 1, team: 2},
]

const LAB_ROLES = [
  {id: 1, user: 1, lab: 1, role: 'OWNER'},
  {id: 2, user: 1, lab: 2, role: 'MEMBER'},
  {id: 3, team: 1, lab: 2, role: 'GUEST'},
  {id: 4, team: 1, lab: 3, role: 'MEMBER'},
  {id: 5, team: 2, lab: 1, role: 'ADMIN'},
  {id: 6, team: 2, lab: 2, role: 'ADMIN'},
  {id: 7, team: 2, lab: 4, role: 'GUEST'},
]

function buildUserLabRoles(userId) {
  
  return {
    getUser: () => {},
    getLabs: (labId) => {},
    getLabRoles: (labId) => {},
    getHighestLabRole: (labId) => {},
    // Bonus method
    // Only implement hasLabRole if time permits.
    hasLabRole: (labId, role) => {}
  }
}

const userLabRoles = buildUserLabRoles(1);
console.log('getUser: ', userLabRoles.getUser());
console.log('getLabs: ', userLabRoles.getLabs(2));
console.log('getLabRoles: ', userLabRoles.getLabRoles(2));
console.log('getHighestLabRole: ', userLabRoles.getHighestLabRole(2));
console.log('hasLabRole: ', userLabRoles.hasLabRole('OWNER'));