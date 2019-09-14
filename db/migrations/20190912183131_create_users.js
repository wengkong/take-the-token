exports.up = async function(knex) {
    const hasTable = await knex.schema.hasTable('users')
    if (!hasTable) {
        return knex.schema.createTable('users', table => {
            table.increments('id')
                .unsigned()
                .primary()
            table.string('email')
                .unique()
                .notNullable()
            table.string('password').notNullable()
            table.string('name').notNullable()
            table.timestamps()
        })
    }
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};