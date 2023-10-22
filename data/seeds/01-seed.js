exports.seed = function(knex) {
    return knex("names").truncate()
        .then(function(){
            return knex("names").insert([
                {firstName: 'Jane', lastName: 'Smith'},
                {firstName: 'Jennifer', lastName: 'Anniston'},
                {firstName: 'Bob', lastName: 'Marley'},
                {firstName: 'Billy', lastName: 'Joel'},
                {firstName: 'Taylor', lastName: 'Swift'},
                {firstName: 'Stevie', lastName: 'Nicks'},
            ])
        })
}