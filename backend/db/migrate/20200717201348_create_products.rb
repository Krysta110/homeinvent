class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :color
      t.string :sku
      t.integer :onhand_qty
      t.integer :coming_in_qty
      t.integer :sale_price
      t.string :image_url
      t.integer :user_id

      t.timestamps
    end
  end
end
