# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_24_175656) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coitems", force: :cascade do |t|
    t.integer "item_id"
    t.integer "corder_id"
    t.integer "qty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "corders", force: :cascade do |t|
    t.integer "customer_id"
    t.float "total_paid"
    t.string "order_num"
    t.string "paid_with"
    t.integer "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.integer "product_id"
    t.integer "onhand_qty"
    t.integer "comingin_qty"
    t.integer "sale_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "poproducts", force: :cascade do |t|
    t.integer "product_id"
    t.integer "porder_id"
    t.integer "qty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "porders", force: :cascade do |t|
    t.string "order_num"
    t.float "total_paid"
    t.string "description"
    t.string "company_name"
    t.integer "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "color"
    t.string "sku"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
