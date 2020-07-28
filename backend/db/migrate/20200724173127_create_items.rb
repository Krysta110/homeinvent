class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :onhand_qty
      t.integer :comingin_qty
      t.integer :sale_price

      t.timestamps
    end
  end
end
