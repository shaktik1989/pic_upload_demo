class ClaimsController < ApplicationController
  before_action :find_claim, only: [:edit, :update, :show, :destroy]

  def index
    @claims = Claim.all
  end

  def new
    @claim = Claim.new
  end

  def create
    @claim = Claim.create(claim_params)
    if @claim.save
      redirect_to claims_path
    else
      render "new"
    end
  end

  def edit
  end

  def destroy
    @claim.destroy
    redirect_to claims_path
  end

  private
    def claim_params
      params.require(:claim).permit(:name, :description)
    end
    
    def find_claim
      @claim = Claim.find(params[:id])
    end
end
