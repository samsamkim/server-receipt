
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipts').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipts').insert([
        {id: 1, location: "T&T", total: 2.00, date: "30 Mar 2018", user_id: 2, 
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 1, approved_by_id: 1},
        {id: 2, location: "McDonalds", total: 12.00, date: "11 Apr 2018", user_id: 2, 
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 2, approved_by_id: 1},
        {id: 3, location: "Tim Hortons", total: 100.00, date: "15 May 2018", user_id: 2, 
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 1, status_id: 3, approved_by_id: 3},
        {id: 4, location: "Lighthouse", total: 10000.00, date: "20 Apr 2018", user_id: 2, 
        image_url: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        category_id: 2, status_id: 2, approved_by_id: 3},
      ]);
    });
};
