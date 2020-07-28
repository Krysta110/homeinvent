class CreatePorders < ActiveRecord::Migration[5.2]
  def change
    create_table :porders do |t|
      t.integer :user_id
      t.string :order_num
      t.float :total_paid
      t.string :description
      t.string :company_name

      t.timestamps
    end
  end
end
