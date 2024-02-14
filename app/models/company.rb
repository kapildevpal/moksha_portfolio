class Company < ApplicationRecord
  has_many :subcompany_relationships, class_name: "CompanyRelationship", foreign_key: "parent_company_id"
  has_many :parent_company_relationships, class_name: "CompanyRelationship", foreign_key: "subcompany_id"
  has_many :subcompanies, through: :subcompany_relationships, source: :subcompany
  has_many :parent_companies, through: :parent_company_relationships, source: :parent_company
end
