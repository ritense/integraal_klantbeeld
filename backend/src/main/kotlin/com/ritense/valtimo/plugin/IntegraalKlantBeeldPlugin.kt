package com.ritense.valtimo.plugin

import com.ritense.plugin.annotation.Plugin
import com.ritense.plugin.annotation.PluginAction
import com.ritense.plugin.annotation.PluginProperty
import com.ritense.processlink.domain.ActivityTypeWithEventName
import com.ritense.valtimo.contract.validation.Url
import mu.KLogger
import mu.KotlinLogging
import java.net.URI

@Plugin(
    key = IntegraalKlantBeeldPlugin.PLUGIN_KEY,
    title = "Integraal Klantbeeld",
    description = "Connects to the International KlantBeeld microservice"
)
class IntegraalKlantBeeldPlugin {

    @Url
    @PluginProperty(key = URL_PROPERTY, secret = false)
    lateinit var url: URI

    @PluginAction(
        key = "get-klantbeeld",
        title = "Get Klantbeeld",
        description = "Based on a BSN number the integraal klantbeeld is loaded",
        activityTypes = [ActivityTypeWithEventName.SERVICE_TASK_START]
    )
    fun getKlantbeeld() {}

    companion object {
        private val logger: KLogger = KotlinLogging.logger {}
        const val PLUGIN_KEY = "integraalKlantBeeld"
        const val URL_PROPERTY = "url"
    }
}
