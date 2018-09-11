class ImagesController < ApplicationController
  before_action :find_claim

  def index
    @claim.images.build
  end

  def create
    begin
      ActiveRecord::Base.transaction do
        params[:claim][:avatar].each do |avatar|
          @claim.images.create(avatar: avatar)
        end
      end
    rescue => e 
      redirect_to claim_images_path(@claim) and return
    end
    redirect_to claims_path and return
  end

  private
    def find_claim
      @claim = Claim.find(params[:claim_id])
    end
end
