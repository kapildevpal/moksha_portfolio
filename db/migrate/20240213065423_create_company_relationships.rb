class CreateCompanyRelationships < ActiveRecord::Migration[7.1]
  def change
    create_table :company_relationships do |t|
      t.references :parent_company, null: false, foreign_key: true
      t.references :subcompany, null: false, foreign_key: true

      t.timestamps
    end
  end
end
