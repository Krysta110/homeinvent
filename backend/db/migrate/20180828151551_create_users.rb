class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "username"
      t.string "password_digest"
      t.string "first_name"
      t.string "last_name"
      t.string "company_name"
      t.string "title"
      t.float "tax_rate"
      t.string "website_url"
      t.string "logo"
      t.integer "commission_rate"
      t.string "address_street"
      t.string "address_city"
      t.string "address_state"
      t.string "address_zip"
      
      t.timestamps
    end
  end
end
