export const makeUser = (formData) => ({
    name: formData.get('name'),
    robot: formData.get('robot'),
    hp: 100,
    social: 0,
    items: {},
    completed: {}
});