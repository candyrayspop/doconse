let meas = {};

// Original complex expression
const _meas$field = meas['field'];
const result = (_meas$field !== null && _meas$field !== void 0) ? _meas$field : meas['field'] = {};

console.log(result); // Outputs: {}
console.log(meas); // Outputs: { field: {} }

// Using the logical nullish assignment operator
meas = {}; // Resetting meas

meas['field'] ??= {};

console.log(meas); // Outputs: { field: {} }
