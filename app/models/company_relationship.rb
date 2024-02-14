class CompanyRelationship < ApplicationRecord
  belongs_to :parent_company, class_name: "Company"
  belongs_to :subcompany, class_name: "Company"
end
