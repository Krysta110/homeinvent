class CreateCoitems < ActiveRecord::Migration[5.2]
  def change
    create_table :coitems do |t|
      t.integer :item_id
      t.integer :corder_id
      t.integer :qty

      t.timestamps
    end
  end
end
