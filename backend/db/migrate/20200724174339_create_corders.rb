class CreateCorders < ActiveRecord::Migration[5.2]
  def change
    create_table :corders do |t|
      t.integer :customer_id
      t.float :total_paid
      t.string :order_num
      t.string :paid_with

      t.timestamps
    end
  end
end
