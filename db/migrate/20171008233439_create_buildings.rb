class CreateBuildings < ActiveRecord::Migration[5.1]
  def change
    create_table :buildings do |t|
      t.string :number, unique: true, null: false
      t.string :name, null: false
      t.string :nickname, null: false
      t.string :year, null: false
      t.decimal :lat, null: false
      t.decimal :lng, null: false
      t.string :history, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
