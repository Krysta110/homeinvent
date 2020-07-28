class CreatePoproducts < ActiveRecord::Migration[5.2]
  def change
    create_table :poproducts do |t|
      t.integer :product_id
      t.integer :porder_id
      t.integer :qty

      t.timestamps
    end
  end
end
