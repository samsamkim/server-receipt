const pg = require("pg");
const settings = require("./settings");

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    }
  });
 
  const returningReceipts = () => {
    return knex.raw(`
      select r.category_id, r.user_id, r.status_id, r.approved_by_id, r.total, r.location, r.date,
      u.first_name, u.last_name, u.email, 
      u2.first_name as approved_first_name, u2.last_name as approved_last_name, u2.email as approved_email,
      c.cat_name, s.status_name, p.project_name
      from receipts r 
      inner join users u on u.id = r.user_id
      inner join users u2 on u2.id = r.approved_by_id
      inner join categories c on c.id = r.category_id
      inner join statuses s on s.id = r.status_id
      inner join projects p on p.id = r.project_id;`)

  }
  exports.returningReceipts = returningReceipts