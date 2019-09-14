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
            table.datetime('created_at').notNullable().defaultTo(knex.fn.now());
            table.datetime('updated_at');
            // table.timestamps([false], [true])
        })
    }
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};