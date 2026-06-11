<?php
/**
 * AI Master SDK - Request Logs Page
 *
 * @since 1.0.0
 */
if (!defined('ABSPATH')) {
    exit;
}

$logs = get_option('aimsdk_request_logs', array());
$logs = array_slice(array_reverse($logs), 0, 100);
?>

<div class="wrap aimsdk-logs-wrap">
    <h1>
        <span class="dashicons dashicons-database" style="font-size:30px;width:30px;height:30px;margin-right:10px;"></span>
        <?php _e('AI Request Logs', 'ai-master-sdk'); ?>
    </h1>

    <p><?php _e('View and analyze AI request history for debugging and optimization.', 'ai-master-sdk'); ?></p>

    <!-- Stats Summary -->
    <div class="aimsdk-logs-stats">
        <div class="aimsdk-stat-box">
            <h3><?php _e('Total Requests', 'ai-master-sdk'); ?></h3>
            <p class="aimsdk-stat-value"><?php echo count($logs); ?></p>
        </div>
        <div class="aimsdk-stat-box">
            <h3><?php _e('Successful', 'ai-master-sdk'); ?></h3>
            <p class="aimsdk-stat-value">
                <?php
                $success = count(array_filter($logs, function($l) { return isset($l['success']) && $l['success']; }));
                echo $success;
                ?>
            </p>
        </div>
        <div class="aimsdk-stat-box">
            <h3><?php _e('Failed', 'ai-master-sdk'); ?></h3>
            <p class="aimsdk-stat-value">
                <?php
                $failed = count(array_filter($logs, function($l) { return isset($l['success']) && !$l['success']; }));
                echo $failed;
                ?>
            </p>
        </div>
    </div>

    <?php if (empty($logs)) : ?>
        <div class="aimsdk-card">
            <p><?php _e('No requests logged yet. Start using AI features to see logs here.', 'ai-master-sdk'); ?></p>
        </div>
    <?php else : ?>

    <!-- Logs Table -->
    <table class="wp-list-table widefat fixed striped aimsdk-logs-table">
        <thead>
            <tr>
                <th width="150"><?php _e('Timestamp', 'ai-master-sdk'); ?></th>
                <th width="120"><?php _e('Ability', 'ai-master-sdk'); ?></th>
                <th width="100"><?php _e('Provider', 'ai-master-sdk'); ?></th>
                <th><?php _e('Context', 'ai-master-sdk'); ?></th>
                <th width="80"><?php _e('Status', 'ai-master-sdk'); ?></th>
                <th width="100"><?php _e('Size', 'ai-master-sdk'); ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($logs as $log) : ?>
                <tr>
                    <td><code><?php echo esc_html($log['timestamp'] ?? '—'); ?></code></td>
                    <td><span class="aimsdk-ability-tag"><?php echo esc_html($log['ability'] ?? '—'); ?></span></td>
                    <td><span class="aimsdk-provider-tag"><?php echo esc_html($log['provider'] ?? '—'); ?></span></td>
                    <td>
                        <?php
                        $ctx_type = $log['context_type'] ?? '';
                        $ctx_id = $log['context_id'] ?? '';
                        if ($ctx_type) {
                            echo esc_html($ctx_type);
                            if ($ctx_id) {
                                echo ' #' . esc_html($ctx_id);
                            }
                        } else {
                            echo '—';
                        }
                        ?>
                    </td>
                    <td>
                        <?php
                        $success = $log['success'] ?? null;
                        if ($success === true) {
                            echo '<span style="color:green;">✅</span>';
                        } elseif ($success === false) {
                            echo '<span style="color:red;">❌</span>';
                        } else {
                            echo '<span style="color:#999;">—</span>';
                        }
                        ?>
                    </td>
                    <td>
                        <?php
                        $size = $log['response_length'] ?? 0;
                        if ($size > 1024) {
                            echo round($size / 1024, 1) . ' KB';
                        } else {
                            echo $size . ' B';
                        }
                        ?>
                    </td>
                </tr>
                <?php if (!empty($log['error'])) : ?>
                <tr class="aimsdk-error-row">
                    <td colspan="6">
                        <code style="color:red;"><?php echo esc_html($log['error']); ?></code>
                    </td>
                </tr>
                <?php endif; ?>
            <?php endforeach; ?>
        </tbody>
    </table>

    <?php endif; ?>

    <!-- Clear Logs -->
    <form method="post" style="margin-top:20px;">
        <?php wp_nonce_field('aimsdk_clear_logs', 'aimsdk_logs_nonce'); ?>
        <button type="submit" name="aimsdk_clear_logs" class="button" onclick="return confirm('Clear all logs?');">
            <?php _e('Clear All Logs', 'ai-master-sdk'); ?>
        </button>
    </form>

    <?php
    // Handle clear logs
    if (isset($_POST['aimsdk_clear_logs']) && wp_verify_nonce($_POST['aimsdk_logs_nonce'], 'aimsdk_clear_logs')) {
        update_option('aimsdk_request_logs', array());
        echo '<div class="notice notice-success"><p>' . __('Logs cleared.', 'ai-master-sdk') . '</p></div>';
    }
    ?>
</div>