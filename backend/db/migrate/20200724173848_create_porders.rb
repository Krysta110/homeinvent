class CreatePorders < ActiveRecord::Migration[5.2]
  def change
    create_table :porders do |t|
      t.string :order_num
      t.float :total_paid
      t.string :description
      t.string :company_name
      t.integer :product_id

      t.timestamps
    end
  end
end
