# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_13_065423) do
  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "company_relationships", force: :cascade do |t|
    t.integer "parent_company_id", null: false
    t.integer "subcompany_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_company_id"], name: "index_company_relationships_on_parent_company_id"
    t.index ["subcompany_id"], name: "index_company_relationships_on_subcompany_id"
  end

  add_foreign_key "company_relationships", "parent_companies"
  add_foreign_key "company_relationships", "subcompanies"
end
