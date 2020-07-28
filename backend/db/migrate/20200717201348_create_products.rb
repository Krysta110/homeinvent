class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :color
      t.string :sku
      
      t.timestamps
    end
  end
end



