const controller = require("../controller/vpcController")
const router=require("express").Router();

router.post("/vpc",controller.aws_vpc)
router.post("/pub_subnet",controller.aws_pub_subnet)
router.post("/pvt_subnet",controller.aws_pvt_subnet)
router.post("/internet_gateway",controller.internet_gateway)
router.post("/route_table_pub",controller.route_table_pub)
router.post("/pub_security_group",controller.pub_security_group)
router.post("/pvt_security_group",controller.pvt_security_group)
router.post("/route_table_pvt",controller.route_table_pvt)
router.post("/pub_subnet_asso",controller.pub_subnet_association)
router.post("/pvt_subnet_asso",controller.pvt_subnet_association)
router.post("/ec2_instance",controller.ec2_instance)
module.exports=router