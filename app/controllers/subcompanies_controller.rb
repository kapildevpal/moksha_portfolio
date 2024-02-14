class SubcompaniesController < ApplicationController
  before_action :set_parent_company

  def create
    subcompany = @parent_company.subcompanies.build(subcompany_params)
    if subcompany.save
      render json: subcompany, status: :created
    else
      render json: subcompany.errors, status: :unprocessable_entity
    end
  end

  private

  def set_parent_company
    @parent_company = Company.find(params[:company_id])
  end

  def subcompany_params
    params.require(:subcompany).permit(:name)
  end
end
