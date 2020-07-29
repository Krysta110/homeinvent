class CreateCorders < ActiveRecord::Migration[5.2]
  def change
    create_table :corders do |t|
      t.integer :customer_id
      t.float :total_paid
      t.string :paid_with
      t.integer :product_id

      t.timestamps
    end
  end
end
