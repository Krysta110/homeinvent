class CreatePurchaseOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :purchase_orders do |t|
      t.date :date
      t.float :total_paid
      t.string :company_name
      t.string :description
      t.string :order_num
      t.integer :product_id

      t.timestamps
    end
  end
end
